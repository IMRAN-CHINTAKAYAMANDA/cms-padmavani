// certificates.js - Handles certificates functionality
import { fetchData, attachTableActionListeners } from './utils';

export async function renderCertificates() {
    const certificates = await fetchData('/certificates');
    const certificateColumns = [
        { header: 'ID', field: 'id', sortable: true },
        { header: 'Student', field: 'student_name', sortable: true },
        { header: 'Class', field: 'class', sortable: true },
        { header: 'Certificate Type', field: 'certificate_type', sortable: true },
        { header: 'Issue Date', field: 'issue_date', sortable: true },
        { header: 'Actions', field: 'actions', render: (val, row) => `
            <button class="action-btn view-btn" title="View Details" data-id="${row.id}" data-table="certificates"><span class="material-icons">visibility</span></button>
        ` },
    ];

    attachTableActionListeners('certificates-table', certificates, certificateColumns, '/certificates');
}