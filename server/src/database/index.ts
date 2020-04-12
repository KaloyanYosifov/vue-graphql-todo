/**
 * External dependencies.
 */
import Todo from '@/features/todos/models/Todo';

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');
const fs = require('fs');

const dbFile = path.resolve(__dirname, 'db.json');
const dbExists = fs.existsSync(dbFile);

if (!dbExists) {
    fs.createWriteStream(dbFile).write('');
}

const adapter = new FileSync(path.resolve(__dirname, 'db.json'));
const db = low(adapter);

if (!dbExists) {
    db.defaults({ [Todo.getTable()]: [] }).write();
}

export default db;
