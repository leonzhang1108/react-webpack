import React from 'react'
import AsyncImport from 'router'
const Hello = AsyncImport('components/Hello')
export default () => (
    <div>
        <Hello />
        123
    </div>
)