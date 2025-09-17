// utils.js - Shared utility functions
export async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    return await response.json();
}

export function attachTableActionListeners(tableId, data, columns, endpoint) {
    // Render table and attach event listeners
}