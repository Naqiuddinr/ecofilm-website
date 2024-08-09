import React from 'react'
import { useParams } from 'react-router-dom'
import { videoData } from '../assets/videoData'

export default function Display() {

    const { id } = useParams();
    const video = videoData[id];

    return (
        <div>
            <h1>{video.title}</h1>
            <p>This page is for ID {id}</p>
        </div>
    )
}
