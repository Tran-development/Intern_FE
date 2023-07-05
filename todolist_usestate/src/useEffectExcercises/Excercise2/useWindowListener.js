import React from 'react'
import { useEffect } from 'react'

export const useWindowListener = (eventType, listerner) => {
    // chi goi setup 1 lan khi component mount
    useEffect(() => {        
        window.addEventListener(eventType, listerner)
        console.log('re-render')
        return () => {
            window.removeEventListener(eventType, listerner)
        }
//nếu ta sử dụng deps ở đây thì nó sẽ render liên tục khi ta di chuyển con trỏ chuột
// vấn đề về hiệu suất !
}, []) 
}
