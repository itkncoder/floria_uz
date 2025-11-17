import React, { useEffect, useState } from 'react'

function App() {
  const phoneNumber = '+998 95 737 33 30'
  const telegramLink = 'https://t.me/floriabuket'
  const instagramLink = 'https://www.instagram.com/floria.uz?igsh=bjlveGR4cnNrZjNr'
  const address = 'Kichik Halqa Yo\'li, Toshkent, O\'zbekiston'
  const coordinates = '41.339906° N, 69.208473° E'
  const mapLink = 'https://maps.apple.com/place?address=Small%20Ring%20Road,%20Tashkent,%20Uzbekistan&coordinate=41.339906,69.208473&name=Point&map=h'

  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      color: ['#FFB6C1', '#FF69B4', '#FFC0CB', '#FFD700', '#FFA500', '#FFFFFF'][Math.floor(Math.random() * 6)]
    }))
    setParticles(newParticles)
  }, [])

  const Butterfly = ({ x = 0, y = 0, delay = 0, size = 1, flightPattern = 'chaotic1' }) => {
    const gradientId = `butterflyGrad-${delay}`
    const wingPatternId = `wingPattern-${delay}`
    const uniqueId = `butterfly-${delay}`
    
    return (
      <svg
        className={`absolute butterfly-container butterfly-${flightPattern}`}
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: `${50 * size}px`,
          height: `${50 * size}px`,
          animationDelay: `${delay}s`,
          opacity: 0.7
        }}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#FF69B4" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FF1493" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#DC143C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C71585" stopOpacity="0.75" />
          </linearGradient>
          <radialGradient id={`${gradientId}-radial`} cx="35%" cy="40%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#FFA500" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#FF69B4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id={`${gradientId}-spot1`} cx="20%" cy="35%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id={`${gradientId}-spot2`} cx="18%" cy="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FFA500" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id={`${gradientId}-vein`} x1="50%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF69B4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        <g className="butterfly-body" transform-origin="50 50">
          {/* Левое верхнее крыло */}
          <g className="left-wing-upper" transform-origin="35 40">
            {/* Основная форма крыла */}
            <path
              d="M 35 15 Q 15 20, 8 35 Q 5 45, 10 55 Q 18 60, 25 58 Q 30 55, 32 50 Q 33 45, 35 40 Q 35 30, 35 15 Z"
              fill={`url(#${gradientId})`}
              opacity="0.9"
              className="wing-flap"
              stroke="#FF1493"
              strokeWidth="0.3"
              strokeOpacity="0.3"
            />
            {/* Внутренний слой с градиентом */}
            <path
              d="M 35 20 Q 20 25, 12 38 Q 10 45, 13 52 Q 18 56, 23 54 Q 27 52, 30 48 Q 32 44, 35 40 Q 35 32, 35 20 Z"
              fill={`url(#${gradientId}-radial)`}
              opacity="0.6"
            />
            {/* Прожилки крыла */}
            <path d="M 35 40 L 12 38" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.5" opacity="0.5" />
            <path d="M 35 40 L 10 45" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.4" opacity="0.4" />
            <path d="M 35 40 L 15 50" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.4" opacity="0.4" />
            <path d="M 35 40 L 20 52" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.3" opacity="0.3" />
            {/* Большое пятно */}
            <ellipse cx="18" cy="38" rx="6" ry="8" fill={`url(#${gradientId}-spot1)`} opacity="0.85" />
            <ellipse cx="18" cy="38" rx="4" ry="5" fill="#FFFFFF" opacity="0.6" />
            {/* Среднее пятно */}
            <ellipse cx="15" cy="50" rx="4" ry="5" fill={`url(#${gradientId}-spot2)`} opacity="0.7" />
            <ellipse cx="15" cy="50" rx="2.5" ry="3" fill="#FFD700" opacity="0.5" />
            {/* Маленькие пятна */}
            <circle cx="12" cy="32" r="2" fill="#FFFFFF" opacity="0.7" />
            <circle cx="22" cy="45" r="1.5" fill="#FFD700" opacity="0.6" />
            <circle cx="10" cy="48" r="1.5" fill="#FFFFFF" opacity="0.6" />
          </g>
          
          {/* Левое нижнее крыло */}
          <g className="left-wing-lower" transform-origin="35 65">
            {/* Основная форма крыла */}
            <path
              d="M 35 55 Q 25 60, 15 70 Q 10 80, 12 88 Q 18 92, 25 90 Q 30 88, 32 83 Q 33 78, 35 75 Q 35 68, 35 55 Z"
              fill={`url(#${gradientId})`}
              opacity="0.85"
              className="wing-flap"
              style={{ animationDelay: `${delay + 0.1}s` }}
              stroke="#FF1493"
              strokeWidth="0.3"
              strokeOpacity="0.3"
            />
            {/* Внутренний слой */}
            <path
              d="M 35 60 Q 28 63, 18 72 Q 15 78, 16 85 Q 20 88, 24 86 Q 28 84, 30 80 Q 32 76, 35 75 Q 35 70, 35 60 Z"
              fill={`url(#${gradientId}-radial)`}
              opacity="0.5"
            />
            {/* Прожилки */}
            <path d="M 35 75 L 18 72" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.4" opacity="0.4" />
            <path d="M 35 75 L 15 78" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.3" opacity="0.3" />
            <path d="M 35 75 L 20 82" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.3" opacity="0.3" />
            {/* Пятна на нижнем крыле */}
            <ellipse cx="20" cy="75" rx="3" ry="4" fill="#FFD700" opacity="0.5" />
            <circle cx="16" cy="80" r="1.5" fill="#FFFFFF" opacity="0.6" />
          </g>
          
          {/* Правое верхнее крыло (зеркальное отражение) */}
          <g className="right-wing-upper" transform="scale(-1, 1) translate(-100, 0)">
            <g transform-origin="35 40">
              {/* Основная форма крыла */}
              <path
                d="M 35 15 Q 15 20, 8 35 Q 5 45, 10 55 Q 18 60, 25 58 Q 30 55, 32 50 Q 33 45, 35 40 Q 35 30, 35 15 Z"
                fill={`url(#${gradientId})`}
                opacity="0.9"
                className="wing-flap"
                stroke="#FF1493"
                strokeWidth="0.3"
                strokeOpacity="0.3"
              />
              {/* Внутренний слой с градиентом */}
              <path
                d="M 35 20 Q 20 25, 12 38 Q 10 45, 13 52 Q 18 56, 23 54 Q 27 52, 30 48 Q 32 44, 35 40 Q 35 32, 35 20 Z"
                fill={`url(#${gradientId}-radial)`}
                opacity="0.6"
              />
              {/* Прожилки крыла */}
              <path d="M 35 40 L 12 38" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.5" opacity="0.5" />
              <path d="M 35 40 L 10 45" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.4" opacity="0.4" />
              <path d="M 35 40 L 15 50" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.4" opacity="0.4" />
              <path d="M 35 40 L 20 52" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.3" opacity="0.3" />
              {/* Большое пятно */}
              <ellipse cx="18" cy="38" rx="6" ry="8" fill={`url(#${gradientId}-spot1)`} opacity="0.85" />
              <ellipse cx="18" cy="38" rx="4" ry="5" fill="#FFFFFF" opacity="0.6" />
              {/* Среднее пятно */}
              <ellipse cx="15" cy="50" rx="4" ry="5" fill={`url(#${gradientId}-spot2)`} opacity="0.7" />
              <ellipse cx="15" cy="50" rx="2.5" ry="3" fill="#FFD700" opacity="0.5" />
              {/* Маленькие пятна */}
              <circle cx="12" cy="32" r="2" fill="#FFFFFF" opacity="0.7" />
              <circle cx="22" cy="45" r="1.5" fill="#FFD700" opacity="0.6" />
              <circle cx="10" cy="48" r="1.5" fill="#FFFFFF" opacity="0.6" />
            </g>
          </g>
          
          {/* Правое нижнее крыло (зеркальное отражение) */}
          <g className="right-wing-lower" transform="scale(-1, 1) translate(-100, 0)">
            <g transform-origin="35 65">
              {/* Основная форма крыла */}
              <path
                d="M 35 55 Q 25 60, 15 70 Q 10 80, 12 88 Q 18 92, 25 90 Q 30 88, 32 83 Q 33 78, 35 75 Q 35 68, 35 55 Z"
                fill={`url(#${gradientId})`}
                opacity="0.85"
                className="wing-flap"
                style={{ animationDelay: `${delay + 0.1}s` }}
                stroke="#FF1493"
                strokeWidth="0.3"
                strokeOpacity="0.3"
              />
              {/* Внутренний слой */}
              <path
                d="M 35 60 Q 28 63, 18 72 Q 15 78, 16 85 Q 20 88, 24 86 Q 28 84, 30 80 Q 32 76, 35 75 Q 35 70, 35 60 Z"
                fill={`url(#${gradientId}-radial)`}
                opacity="0.5"
              />
              {/* Прожилки */}
              <path d="M 35 75 L 18 72" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.4" opacity="0.4" />
              <path d="M 35 75 L 15 78" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.3" opacity="0.3" />
              <path d="M 35 75 L 20 82" stroke={`url(#${gradientId}-vein)`} strokeWidth="0.3" opacity="0.3" />
              {/* Пятна на нижнем крыле */}
              <ellipse cx="20" cy="75" rx="3" ry="4" fill="#FFD700" opacity="0.5" />
              <circle cx="16" cy="80" r="1.5" fill="#FFFFFF" opacity="0.6" />
            </g>
          </g>
          
          <ellipse cx="50" cy="50" rx="2.5" ry="38" fill="#654321" opacity="0.9" />
          <ellipse cx="50" cy="30" rx="3" ry="8" fill="#8B4513" />
          <ellipse cx="50" cy="70" rx="2" ry="6" fill="#654321" />
          
          <line x1="50" y1="25" x2="50" y2="30" stroke="#8B4513" strokeWidth="1" />
          <line x1="50" y1="35" x2="50" y2="40" stroke="#654321" strokeWidth="1" />
          <line x1="50" y1="45" x2="50" y2="50" stroke="#654321" strokeWidth="1" />
          <line x1="50" y1="55" x2="50" y2="60" stroke="#654321" strokeWidth="1" />
          <line x1="50" y1="65" x2="50" y2="70" stroke="#654321" strokeWidth="1" />
          
          <path
            d="M 50 12 Q 48 8, 45 6 Q 42 4, 45 3"
            stroke="#654321"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 50 12 Q 52 8, 55 6 Q 58 4, 55 3"
            stroke="#654321"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="45" cy="3" r="2" fill="#FFD700" opacity="0.9" />
          <circle cx="55" cy="3" r="2" fill="#FFD700" opacity="0.9" />
          <circle cx="45" cy="3" r="1" fill="#FFA500" />
          <circle cx="55" cy="3" r="1" fill="#FFA500" />
        </g>
      </svg>
    )
  }

  const AnimatedFlower = ({ x = 0, y = 0, delay = 0, size = 1, color = '#FF69B4' }) => {
    const gradientId = `flowerGrad-${delay}`
    return (
      <div
        className="absolute animate-flower-float"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          animationDelay: `${delay}s`,
          opacity: 0.4
        }}
      >
        <svg
          width={60 * size}
          height={60 * size}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id={gradientId}>
              <stop offset="0%" stopColor={color} stopOpacity="0.9" />
              <stop offset="100%" stopColor={color} stopOpacity="0.3" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="8" fill="#FFD700" />
          <ellipse cx="50" cy="30" rx="12" ry="20" fill={`url(#${gradientId})`} />
          <ellipse cx="70" cy="50" rx="12" ry="20" fill={`url(#${gradientId})`} transform="rotate(90 70 50)" />
          <ellipse cx="50" cy="70" rx="12" ry="20" fill={`url(#${gradientId})`} transform="rotate(180 50 70)" />
          <ellipse cx="30" cy="50" rx="12" ry="20" fill={`url(#${gradientId})`} transform="rotate(270 30 50)" />
          <ellipse cx="60" cy="40" rx="10" ry="18" fill={color} opacity="0.7" transform="rotate(45 60 40)" />
          <ellipse cx="60" cy="60" rx="10" ry="18" fill={color} opacity="0.7" transform="rotate(135 60 60)" />
          <ellipse cx="40" cy="60" rx="10" ry="18" fill={color} opacity="0.7" transform="rotate(225 40 60)" />
          <ellipse cx="40" cy="40" rx="10" ry="18" fill={color} opacity="0.7" transform="rotate(315 40 40)" />
        </svg>
      </div>
    )
  }

  const StarIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 2L13.5 6.5L18 8L13.5 9.5L12 14L10.5 9.5L6 8L10.5 6.5L12 2Z" fill="url(#starGradient)" opacity="0.6"/>
      <defs>
        <linearGradient id="starGradient" x1="12" y1="2" x2="12" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD700"/>
          <stop offset="100%" stopColor="#FFA500"/>
        </linearGradient>
      </defs>
    </svg>
  )

  const RocketIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 16.5C4.5 16.5 2 14 2 11.5C2 9 4.5 6.5 7 4.5C9.5 2.5 12 2 12 2C12 2 12.5 4.5 14.5 7C16.5 9.5 19 12 19 12C19 12 16.5 14.5 14 16.5C11.5 18.5 9 19 9 19L4.5 16.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 19L4.5 16.5L2 19L4.5 21.5L9 19Z" fill="currentColor"/>
      <path d="M9 19L12 22L14.5 19.5L12 16.5L9 19Z" fill="currentColor"/>
      <circle cx="7" cy="9" r="1" fill="#FFD700"/>
      <circle cx="10" cy="12" r="1" fill="#FFD700"/>
      <circle cx="13" cy="9" r="1" fill="#FFD700"/>
    </svg>
  )

  const ClockIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  )

  const FlowerIcon = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" fill="#FF69B4" opacity="0.9"/>
      <ellipse cx="12" cy="8" rx="3" ry="5" fill="#FFB6C1" transform="rotate(0)"/>
      <ellipse cx="16" cy="12" rx="3" ry="5" fill="#FFB6C1" transform="rotate(90)"/>
      <ellipse cx="12" cy="16" rx="3" ry="5" fill="#FFB6C1" transform="rotate(180)"/>
      <ellipse cx="8" cy="12" rx="3" ry="5" fill="#FFB6C1" transform="rotate(270)"/>
      <ellipse cx="14" cy="10" rx="2" ry="4" fill="#FF1493" transform="rotate(45)"/>
      <ellipse cx="14" cy="14" rx="2" ry="4" fill="#FF1493" transform="rotate(135)"/>
      <ellipse cx="10" cy="14" rx="2" ry="4" fill="#FF1493" transform="rotate(225)"/>
      <ellipse cx="10" cy="10" rx="2" ry="4" fill="#FF1493" transform="rotate(315)"/>
      <circle cx="12" cy="12" r="2" fill="#FFD700"/>
    </svg>
  )

  const LocationIcon = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="9" r="3" fill="white" opacity="0.9"/>
    </svg>
  )

  const PhoneIcon = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )

  const TelegramIcon = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )

  const InstagramIcon = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )

  const Logo = () => {
    const [imgError, setImgError] = useState(false)
    
    return (
      <div className="relative">
        {!imgError ? (
          <img
            src="https://i.ibb.co/yc9N36MN/9e25abe3-5901-4daf-b8ff-025639784e95.png"
            alt="FLORIA FLOWERS Logo"
            className="mx-auto w-[300px] h-[150px] object-cover drop-shadow-lg"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="mx-auto w-[300px] h-[150px] flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white font-dancing gradient-text">
              FLORIA FLOWERS
            </h1>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-pink-800 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,182,193,0.2),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,105,180,0.2),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(255,20,147,0.15),transparent_70%),radial-gradient(circle_at_70%_20%,rgba(255,215,0,0.1),transparent_60%)] animate-gentle-pulse"></div>
        
        <Butterfly x={10} y={15} delay={0} size={1.2} flightPattern="chaotic1" />
        <Butterfly x={85} y={25} delay={1.5} size={0.9} flightPattern="chaotic2" />
        <Butterfly x={15} y={70} delay={3} size={1.1} flightPattern="chaotic3" />
        <Butterfly x={90} y={60} delay={2} size={0.8} flightPattern="chaotic4" />
        <Butterfly x={50} y={10} delay={4} size={1} flightPattern="chaotic1" />
        <Butterfly x={5} y={40} delay={2.5} size={1.3} flightPattern="chaotic2" />
        <Butterfly x={75} y={80} delay={1} size={0.9} flightPattern="chaotic3" />
        <Butterfly x={30} y={30} delay={3.5} size={1.1} flightPattern="chaotic4" />
        
        <AnimatedFlower x={5} y={20} delay={0} size={1.5} color="#FF69B4" />
        <AnimatedFlower x={90} y={15} delay={1} size={1.2} color="#FFB6C1" />
        <AnimatedFlower x={8} y={75} delay={2} size={1.8} color="#FF1493" />
        <AnimatedFlower x={92} y={70} delay={0.5} size={1.3} color="#FF69B4" />
        <AnimatedFlower x={25} y={10} delay={1.5} size={1.1} color="#FFC0CB" />
        <AnimatedFlower x={70} y={85} delay={2.5} size={1.4} color="#FFB6C1" />
        <AnimatedFlower x={40} y={5} delay={3} size={1.2} color="#FF1493" />
        <AnimatedFlower x={60} y={90} delay={1.8} size={1.6} color="#FF69B4" />
        <AnimatedFlower x={15} y={50} delay={0.8} size={1.3} color="#FFC0CB" />
        <AnimatedFlower x={85} y={45} delay={2.2} size={1.1} color="#FFB6C1" />
        
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-particle-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
          />
        ))}
        
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/30 via-rose-400/25 to-pink-600/20 rounded-full blur-3xl animate-gentle-pulse animate-rotate-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 via-pink-500/25 to-rose-500/20 rounded-full blur-3xl animate-gentle-pulse animate-rotate-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-rose-400/20 via-pink-400/15 to-yellow-400/15 rounded-full blur-3xl animate-gentle-pulse animate-rotate-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-pink-300/25 to-rose-300/20 rounded-full blur-3xl animate-gentle-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-br from-yellow-300/20 to-pink-300/15 rounded-full blur-3xl animate-gentle-pulse animate-rotate-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-md w-full relative z-10 animate-fade-in">
        <div className="text-center mb-14 animate-slide-up">
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <Logo />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 bg-white/10 rounded-full blur-2xl animate-gentle-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/95 text-sm font-medium animate-fade-in mt-8" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <span className="text-2xl animate-sparkle">⭐</span>
              <span className="font-montserrat font-semibold text-base">Eng yangi gullar</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <span className="text-2xl animate-sparkle" style={{ animationDelay: '0.2s' }}>🚀</span>
              <span className="font-montserrat font-semibold text-base">Tez yetkazib berish</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <span className="text-2xl animate-sparkle" style={{ animationDelay: '0.4s' }}>⏰</span>
              <span className="font-montserrat font-semibold text-base">24/7</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="group relative w-full overflow-hidden text-white font-bold py-7 px-8 rounded-[2rem] transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-4 button-magical-pink"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute top-2 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-sparkle"></div>
            <div className="absolute bottom-2 left-6 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle" style={{ animationDelay: '0.2s' }}></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="relative">
                <span className="text-4xl drop-shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">📞</span>
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="text-2xl font-montserrat font-bold drop-shadow-lg">Qo'ng'iroq qilish</span>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">            </div>
          </a>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full overflow-hidden text-white font-bold py-7 px-8 rounded-[2rem] transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-4 button-magical-blue"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute top-3 right-6 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-sparkle"></div>
            <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle" style={{ animationDelay: '0.3s' }}></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="relative">
                <span className="text-4xl drop-shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">✈️</span>
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="text-2xl font-montserrat font-bold drop-shadow-lg">Telegram kanalimiz</span>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">            </div>
          </a>

          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full overflow-hidden text-white font-bold py-7 px-8 rounded-[2rem] transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-4 button-magical-instagram"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute top-2 right-5 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-sparkle"></div>
            <div className="absolute bottom-2 left-5 w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle" style={{ animationDelay: '0.25s' }}></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="relative">
                <span className="text-4xl drop-shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">📷</span>
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="text-2xl font-montserrat font-bold drop-shadow-lg">Instagram sahifamiz</span>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">            </div>
          </a>

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full overflow-hidden text-white font-bold py-7 px-8 rounded-[2rem] transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-4 button-magical-pink"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute top-2 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-sparkle"></div>
            <div className="absolute bottom-2 left-6 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle" style={{ animationDelay: '0.2s' }}></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="relative">
                <span className="text-4xl drop-shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">📍</span>
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-montserrat font-bold drop-shadow-lg">Manzil</span>
                <span className="text-sm font-montserrat text-white/90 drop-shadow-md">{address}</span>
              </div>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block px-8 py-4 glass rounded-full border-2 border-white/20 shadow-lg hover:border-white/30 transition-all duration-300">
            <p className="text-white/80 text-sm font-montserrat font-semibold flex items-center justify-center gap-3">
              <span className="text-2xl animate-sparkle">🌸</span>
              <span className="gradient-text font-montserrat font-bold">© 2024 FLORIA FLOWERS</span>
              <span className="text-2xl animate-sparkle" style={{ animationDelay: '0.3s' }}>🌺</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
