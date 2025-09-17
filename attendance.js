// attendance.js - Handles attendance functionality
import { fetchData, attachTableActionListeners } from './utils';

export async function renderAttendance() {
    const attendanceData = await fetchData('/attendance');
    const attendanceColumns = [
        { header: 'ID', field: 'id', sortable: true },
        { header: 'Student', field: 'student_name', sortable: true },
        { header: 'Class', field: 'class', sortable: true },
        { header: 'Date', field: 'date', sortable: true },
        { header: 'Status', field: 'status', sortable: true },
    ];

    attachTableActionListeners('attendance-table', attendanceData, attendanceColumns, '/attendance');
}