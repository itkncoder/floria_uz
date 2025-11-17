import React, { useEffect, useState, useId } from 'react'

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
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
    </svg>
  )

  const RocketIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 16.5C4.5 16.5 2 14 2 11.5C2 9 4.5 6.5 7 4.5C9.5 2.5 12 2 12 2C12 2 12.5 4.5 14.5 7C16.5 9.5 19 12 19 12C19 12 16.5 14.5 14 16.5C11.5 18.5 9 19 9 19L4.5 16.5Z" fill="currentColor"/>
      <path d="M9 19L4.5 16.5L2 19L4.5 21.5L9 19Z" fill="currentColor"/>
      <path d="M9 19L12 22L14.5 19.5L12 16.5L9 19Z" fill="currentColor"/>
    </svg>
  )

  const ClockIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )

  const FlowerIcon = ({ className = "w-12 h-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" fill="currentColor"/>
      <ellipse cx="12" cy="8" rx="3" ry="5" fill="currentColor" transform="rotate(0)"/>
      <ellipse cx="16" cy="12" rx="3" ry="5" fill="currentColor" transform="rotate(90)"/>
      <ellipse cx="12" cy="16" rx="3" ry="5" fill="currentColor" transform="rotate(180)"/>
      <ellipse cx="8" cy="12" rx="3" ry="5" fill="currentColor" transform="rotate(270)"/>
      <ellipse cx="14" cy="10" rx="2" ry="4" fill="currentColor" transform="rotate(45)"/>
      <ellipse cx="14" cy="14" rx="2" ry="4" fill="currentColor" transform="rotate(135)"/>
      <ellipse cx="10" cy="14" rx="2" ry="4" fill="currentColor" transform="rotate(225)"/>
      <ellipse cx="10" cy="10" rx="2" ry="4" fill="currentColor" transform="rotate(315)"/>
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  )

  const LocationIcon = ({ className = "w-10 h-10" }) => {
    const gradientId = useId()
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${gradientId}-pin`} x1="5" y1="2" x2="19" y2="22">
            <stop offset="0%" stopColor="#FF5F6D" />
            <stop offset="100%" stopColor="#FFC371" />
          </linearGradient>
        </defs>
        <path
          d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
          fill={`url(#${gradientId}-pin)`}
        />
        <circle cx="12" cy="9" r="3.2" fill="#fff" opacity="0.85" />
        <circle cx="12" cy="9" r="1.6" fill="#FF8A65" opacity="0.9" />
      </svg>
    )
  }

  const PhoneIcon = ({ className = "w-10 h-10" }) => {
    const gradientId = useId()
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${gradientId}-phone`} x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id={`${gradientId}-highlight`} x1="4" y1="4" x2="10" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
          fill={`url(#${gradientId}-phone)`}
        />
        <path d="M6 4h2.2l1.2 3.7-2.2 1.1L6 4Z" fill={`url(#${gradientId}-highlight)`} opacity="0.7" />
      </svg>
    )
  }

  const TelegramIcon = ({ className = "w-10 h-10" }) => {
    const gradientId = useId()
    return (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={`${gradientId}-bubble`} cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#A5F3FC" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </radialGradient>
          <linearGradient id={`${gradientId}-plane`} x1="6" y1="7" x2="18" y2="17" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="12" fill={`url(#${gradientId}-bubble)`} />
        <path
          d="M17.6 7.44c.12-.51-.36-.95-.85-.78L5.1 11.13c-.62.21-.61 1.09.01 1.28l3.12.98 1.2 3.73c.19.6.98.76 1.39.28l1.83-2.09 3.06 2.29c.44.33 1.08.09 1.2-.45l1-8.73Z"
          fill={`url(#${gradientId}-plane)`}
        />
        <path d="M9 13.5 17 8.5l-6.2 6.9-.35 2.2L9 13.5Z" fill="#BAE6FD" opacity="0.8" />
      </svg>
    )
  }

  const InstagramIcon = ({ className = "w-10 h-10" }) => {
    const gradientId = useId()
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${gradientId}-ig`} x1="2" y1="2" x2="22" y2="22">
            <stop offset="0%" stopColor="#F58529" />
            <stop offset="30%" stopColor="#FEDA77" />
            <stop offset="60%" stopColor="#DD2A7B" />
            <stop offset="100%" stopColor="#8134AF" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5" fill={`url(#${gradientId}-ig)`} />
        <circle cx="12" cy="12" r="4" fill="#fff" opacity="0.9" />
        <circle cx="12" cy="12" r="2.3" fill="#F43F5E" opacity="0.8" />
        <circle cx="17" cy="7" r="1.3" fill="#fff" opacity="0.9" />
      </svg>
    )
  }

  const CarIcon = ({ className = "w-10 h-10" }) => {
    const gradientId = useId()
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${gradientId}-car`} x1="3" y1="5" x2="21" y2="19" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF9A9E" />
            <stop offset="50%" stopColor="#FAD0C4" />
            <stop offset="100%" stopColor="#F5576C" />
          </linearGradient>
          <linearGradient id={`${gradientId}-glass`} x1="5" y1="6" x2="19" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B3E5FC" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path
          d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v5.5c0 .83.67 1.5 1.5 1.5H4c.55 0 1-.45 1-1v-1h14v1c0 .55.45 1 1 1h.5c.83 0 1.5-.67 1.5-1.5V12l-2.08-5.99z"
          fill={`url(#${gradientId}-car)`}
          stroke="#FF5F6D"
          strokeWidth="0.6"
        />
        <path d="M5 11l1.5-4.5h11L19 11H5z" fill={`url(#${gradientId}-glass)`} />
        <circle cx="6.5" cy="15" r="1.6" fill="#1F2933" />
        <circle cx="17.5" cy="15" r="1.6" fill="#1F2933" />
        <circle cx="6.5" cy="15" r="0.9" fill="#90CAF9" />
        <circle cx="17.5" cy="15" r="0.9" fill="#90CAF9" />
      </svg>
    )
  }

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
              <StarIcon className="w-6 h-6 text-white" />
              <span className="font-montserrat font-semibold text-base">Eng yangi gullar</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <CarIcon className="w-6 h-6 text-white" />
              <span className="font-montserrat font-semibold text-base">Tez yetkazib berish</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <ClockIcon className="w-6 h-6 text-white" />
              <span className="font-montserrat font-semibold text-base">24/7</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://t.me/floria_flowers_uz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full overflow-hidden text-white font-bold py-7 px-8 rounded-[2rem] transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-4 button-magical-pink"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute top-2 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-2 left-6 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100"></div>
            <div className="relative z-10 flex items-center gap-4">
              <CarIcon className="w-10 h-10 text-white drop-shadow-lg" />
              <span className="text-2xl font-montserrat font-bold drop-shadow-lg">Buyurtma berish</span>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">            </div>
          </a>

          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="group relative w-full overflow-hidden text-white font-bold py-7 px-8 rounded-[2rem] transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-4 button-magical-pink"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute top-2 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-2 left-6 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100"></div>
            <div className="relative z-10 flex items-center gap-4">
              <PhoneIcon className="w-10 h-10 text-white drop-shadow-lg" />
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
            <div className="absolute top-3 right-6 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-0 group-hover:opacity-100"></div>
            <div className="relative z-10 flex items-center gap-4">
              <TelegramIcon className="w-10 h-10 text-white drop-shadow-lg" />
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
            <div className="absolute top-2 right-5 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-2 left-5 w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-0 group-hover:opacity-100"></div>
            <div className="relative z-10 flex items-center gap-4">
              <InstagramIcon className="w-10 h-10 text-white drop-shadow-lg" />
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
            <div className="absolute top-2 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-2 left-6 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100"></div>
            <div className="relative z-10 flex items-center gap-4">
              <LocationIcon className="w-10 h-10 text-white drop-shadow-lg" />
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
            <p className="text-white/80 text-sm font-montserrat font-semibold flex items-center justify-center">
              <span className="gradient-text font-montserrat font-bold">© 2024 FLORIA FLOWERS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
