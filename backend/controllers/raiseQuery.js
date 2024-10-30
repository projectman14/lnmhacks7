import { google } from 'googleapis';
import { MongoClient } from 'mongodb';
import Query from "../models/queryModel.js";
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';  
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Google Sheets API
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

class GoogleSheetsSync {
    constructor() {
        this.auth = null;
        this.sheets = null;
        this.spreadsheetId = process.env.GOOGLE_SHEET_ID;
    }

    async initialize() {
        try {
            // Read credentials from environment variable
            const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON);

            this.auth = new google.auth.GoogleAuth({
                credentials,
                scopes: SCOPES,
            });

            this.sheets = google.sheets({ version: 'v4', auth: this.auth });

            // Test the connection
            await this.sheets.spreadsheets.get({ spreadsheetId: this.spreadsheetId });
            console.log('Successfully connected to Google Sheets');
        } catch (error) {
            console.error('Error initializing Google Sheets:', error.message);
            if (error.message.includes('credentials')) {
                console.error('Please check if GOOGLE_CREDENTIALS_JSON is valid');
            }
            if (error.message.includes('spreadsheetId')) {
                console.error('Please check if GOOGLE_SHEET_ID in .env is correct');
            }
            throw error;
        }
    }

    async appendRow(values) {
        try {
            const request = {
                spreadsheetId: this.spreadsheetId,
                range: 'Sheet1!A:C', // Adjust based on your sheet name and columns
                valueInputOption: 'RAW',
                insertDataOption: 'INSERT_ROWS',
                resource: {
                    values: [values],
                },
            };

            const response = await this.sheets.spreadsheets.values.append(request);
            console.log('Successfully appended row to Google Sheets');
            return response;
        } catch (error) {
            console.error('Error appending row:', error.message);
            throw error;
        }
    }
}

// Modified query controller
const raiseQuery = async (req, res) => {
    try {
        const { name, email, query } = req.body;

        const payload = {
            name,
            email,
            query
        };

        const question = new Query(payload);
        const saveQuestion = await question.save();

        // Initialize Google Sheets sync
        const sheetsSync = new GoogleSheetsSync();
        await sheetsSync.initialize();

        // Append to Google Sheets
        await sheetsSync.appendRow([name, email, query]);

        return res.status(200).json({
            message: "Query Submitted Successfully",
            data: saveQuestion,
            success: true
        });
    } catch (err) {
        console.error('Error in raiseQuery:', err);
        res.status(400).json({
            message: err.message || err,
            success: false
        });
    }
};

// Set up MongoDB Change Stream
const setupChangeStream = async () => {
    try {
        const sheetsSync = new GoogleSheetsSync();
        await sheetsSync.initialize();

        const collection = Query.collection;
        const changeStream = collection.watch();

        changeStream.on('change', async (change) => {
            try {
                if (change.operationType === 'insert') {
                    const doc = change.fullDocument;
                    await sheetsSync.appendRow([doc.name, doc.email, doc.query]);
                    console.log('Successfully synced new document to Google Sheets');
                }
            } catch (error) {
                console.error('Error processing change stream event:', error.message);
            }
        });

        console.log('Change stream is set up and watching for changes');
    } catch (error) {
        console.error('Error setting up change stream:', error.message);
        throw error;
    }
};

export { raiseQuery, setupChangeStream };