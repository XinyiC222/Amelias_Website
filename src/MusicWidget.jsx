import { useEffect, useState, useRef} from "react"
import {FaPlay, FaPause, FaStepBackward, FaStepForward, FaMusic, FaTimes } from 'react-icons/fa'
import './MusicWidget.css'


const playlist = [
    {
        title: "4Me4Me",
        artist: "Malcolm Todd",
        cover: "./covers/4Me4Me.png",
        src: "./music/Malcolm Todd - 4Me 4Me.mp3"
    },
    {
        title: "Hold Your Hand",
        artist: "Breezee",
        cover: "./covers/HoldYourHand.png",
        src: "./music/Breezee - Hold Your Hand (Official Music Video) - Breezee.mp3"
    },
    {
        title: "Japanese Denim",
        artist: "Daniel Caesar",
        cover: "./covers/JapaneseDenim.png",
        src: "./music/Daniel Caesar - Japanese Denim.mp3"
    },
    {
        title: "Double Take",
        artist: "Dhruv",
        cover: "./covers/doubleTake.png",
        src: "./music/dhruv - double take (audio).mp3"
    },
    {
        title: "Cherry Wine",
        artist: "Grent Perez",
        cover: "./covers/CherryWine.png",
        src: "./music/grentperez - Cherry Wine (Official Lyric Video) - grentperez.mp3"
    },
    {
        title: "Farewell",
        artist: "marQ",
        cover: "./covers/Farewell.png",
        src: "./music/marQ - Farewell (Official Video).mp3"
    },
    {
        title: "Microdose",
        artist: "Jackson Laird",
        cover: "./covers/Microdose.png",
        src: "./music/Microdose - Jackson Laird.mp3"
    },
    {
        title: "Orbit",
        artist: "Dxngelo",
        cover: "./covers/orbit.png",
        src: "./music/orbit - Dxngelo.mp3"
    },
    {
        title: "Passionfruit",
        artist: "Drake",
        cover: "./covers/Passionfruit.png",
        src: "./music/Passionfruit - Drake.mp3"
    },
    {
        title: "I'll Keep you Safe",
        artist: "Sagun",
        cover: "./covers/I'llKeepYouSafe.png",
        src: "./music/sagun - I'll Keep You Safe (feat. Shiloh) - sagun.mp3"
    },
    {
        title: "Infrunami",
        artist: "Steve Lacy",
        cover: "./covers/infrunami.png",
        src: "./music/Infrunami.mp3"
    },
    {
        title: "Sunsets With You",
        artist: "Cliff, Yden",
        cover: "./covers/SunsetsWithYou.png",
        src: "./music/Sunsets With You - Cliff, Yden (Official Lyric Video) - Cliff.mp3"
    }
]


function MusicWidget() {
    const audioRef = useRef(null)
    const progressRef = useRef(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [trackIndex, setTrackIndex] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isMinimized, setIsMinimized] = useState(false)

    const track = playlist[trackIndex]

    //play || pause
    const togglePlay = () => {
        if(!audioRef.current) return
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const nextTrack = () => {
        setTrackIndex((prev) => (prev + 1) % playlist.length)
        setIsPlaying(true)
    }

    const prevTrack = () => {
        setTrackIndex((prev) => (prev -1 + playlist.length) % playlist.length)
        setIsPlaying(true)
    }

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime)
    }

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration)
    }

    useEffect(() => {
        const audio = audioRef.current 
        if (!audio) return
        audio.load()
        if(isPlaying) {
            audio.play().catch(() => {})
        }
    }, [trackIndex, isPlaying])

    const handleSeek = (e) => {
        const bar = progressRef.current
        const rect = bar.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const percentage = clickX / rect.width 
        audioRef.current.currentTime = percentage * duration
    }

    const formatTime = (seconds) => {
        if(isNaN(seconds)) return "0.00"
        const mins = Math.floor(seconds/60)
        const secs = Math.floor(seconds % 60)
        return `${mins}:${secs < 10 ? '0': ''}${secs}`
    }

    if (isMinimized) {
    return (
        <button
            className= "music-minimized"
            onClick= {() => setIsMinimized(false)}
            aria-label="Open music player"
            >
            <FaMusic />
            </button>
        )
    }

    return (
        <div className="music-widget glass">
            <audio
                ref={audioRef}
                src={track.src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded = {nextTrack}
            />
            <button
                className="music-close"
                onClick={() => setIsMinimized(true)}
                aria-label="Minimize player"
            >
                <FaTimes/>
            </button>

            <div className="music-main">
                <img src={track.cover} alt={track.title} className="music-cover"/>
                <div className="music-info">
                    <div className="music-title">{track.title}</div>
                    <div className="music-artist">{track.artist}</div>
                </div>
            </div>

            <div className="music-progress" ref ={progressRef} onClick={handleSeek}>
                <div
                className="progress-fill"
                style={{ width: `${(currentTime / duration) * 100 || 0}%`}}
                />
            </div>

            <div className = "music-controls">
                <button onClick={prevTrack} aria-label="Prev track">
                    <FaStepBackward />
                </button>
                <button
                    onClick={togglePlay}
                    aria-label="Play/Pause">
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                <button onClick={nextTrack} aria-label = "Next track">
                    <FaStepForward />
                </button>
            </div>
        </div>
    )
}

export default MusicWidget