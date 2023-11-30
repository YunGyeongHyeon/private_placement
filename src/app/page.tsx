"use client"

import { useEffect, useState } from 'react';


export default function Home() {

    const nowDate = new Date()
    const [ctime,setTime] = useState<string>("")
    
    useEffect(() => {
        console.log(nowDate.toLocaleTimeString())
        setInterval(() => {
            const moveDate = new Date()
            let time  = moveDate.getHours() + ":" + moveDate.getMinutes() + ":" + moveDate.getSeconds()
            setTime(time)
        },1000)
    },[])
    
    const realDate = new Date()

    const DigitalClock = () => {
        const nowTime = new Date().toLocaleTimeString()
        return (
            <div className='text-center m-10 flex-col justify-between border border-solid border-white'>
                  <div className='text-3xl'>{realDate.getFullYear()}년 {realDate.getMonth()+1}월 {realDate.getDate()}일</div>
                    {ctime == "" ? nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds()  : ctime}
              </div>
        )
    }

  return (
      <div className="flex justify-center items-center w-screen h-screen">
          <div className="flex flex-col justify-center items-center w-3/4 h-3/4 border-solid border-2 border-white">
              {/*시계*/}
              {DigitalClock()}
              
              {/*TodoList box*/}
              <div className="w-1/2 border-solid border-2 border-red-500 h-52">
                  <ul>
                      {/* 저장한 데이터로 map 돌리기 */}
                      <li className="flex justify-between w-100 border-solid border-2 border-white">
                          <input type={"checkbox"}/>
                          <div>Title</div>
                          <div>delete</div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  )
}
