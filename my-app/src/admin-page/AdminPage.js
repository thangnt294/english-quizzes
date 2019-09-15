import React, { Component } from 'react'
import AdminTable from './components/AdminTable'
import './css/AdminPage.css'

class AdminPage extends Component {
    render() {
        return (
            <div className="admin-body">
                <div className="admin-header">
                    <h1>Welcome back, Thang</h1>
                    <button>Log Out</button>
                </div>
                <AdminTable />
            </div>
        )
    }
}

export default AdminPage
