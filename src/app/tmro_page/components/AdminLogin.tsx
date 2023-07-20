'use client'

import React, { FormEventHandler, useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { BACKEND } from '@/utils/data';

const AdminLogin = ({ HandleAdminSet }: { HandleAdminSet: (isAdmin: boolean) => void }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isloginclicked, setIsLoginCLicked] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoginCLicked(true)
        try {
            const response = await fetch(BACKEND + '/adminlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            console.log("🚀 ~ file: AdminLogin.tsx:25 ~ handleLogin ~ data:", data)
            setIsLoginCLicked(false)
            if (response.ok) {
                HandleAdminSet(data.isAdmin);
                Cookies.set('isAdmin', data.isAdmin);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Login failed. Please try again.');
        }
    };


    useEffect(() => {
        const isAdminCookie = Cookies.get('isAdmin');
        if (!isAdminCookie) {
            return setMessage('Authentication required')
        }
        HandleAdminSet(isAdminCookie === 'true');
    }, []);


    return (
        <div className="w-full sm:w-1/2 md:w-[40%] lg:w-[35%] xl:w-[30%] bg-gray-100 shadow-md border rounded-sm p-4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 mb-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    {isloginclicked ? 'sabar karo...' : 'Login'}
                </button>
            </form>
            <p className="text-red-500 mt-2">{message}</p>
        </div>
    )
}

export default AdminLogin
