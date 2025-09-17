// leaves.js - Handles leave applications functionality
import { fetchData, attachTableActionListeners } from './utils';

export async function renderLeaves() {
    const leaveApplications = await fetchData('/leaves');
    const leaveColumns = [
        { header: 'ID', field: 'id', sortable: true },
        { header: 'Student', field: 'student_name', sortable: true },
        { header: 'Class', field: 'class', sortable: true },
        { header: 'Leave Date', field: 'leave_date', sortable: true },
        { header: 'Reason', field: 'reason', sortable: false },
        { header: 'Status', field: 'status', sortable: true },
        { header: 'Actions', field: 'actions', render: (val, row) => `
            <button class="action-btn approve-btn" title="Approve Leave" data-id="${row.id}" data-table="leaves"><span class="material-icons">check</span></button>
            <button class="action-btn reject-btn" title="Reject Leave" data-id="${row.id}" data-table="leaves"><span class="material-icons">close</span></button>
        ` },
    ];

    attachTableActionListeners('leaves-table', leaveApplications, leaveColumns, '/leaves');
}