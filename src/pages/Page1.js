import React from 'react'
import AsyncImport from 'asyncImport'
const Hello = AsyncImport('components/Hello')
export default () => (
    <div>
        <Hello />
        page111
    </div>
)