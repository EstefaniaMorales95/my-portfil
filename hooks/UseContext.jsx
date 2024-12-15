'use client';
import React from 'react';
import { Home } from '../app/Home';
import { DarkModeProvider } from '../contexts/darkModecontext';

function UseContext() {
	return (
		<DarkModeProvider>
			<Home />
		</DarkModeProvider>
	);
}

export default UseContext;
