import React, { useId, useState } from 'react'

const palette = {
    background: '#722F37', // Глубокий бардовый из логотипа
    overlay: '#5C1F25',
    accent: '#C41E3A', // Красный цветок (пион/роза)
    accentStrong: '#8B1538',
    accentSoft: '#E8A5B7', // Светлый розовый
    accentMuted: '#4A1A1F',
    text: '#FFFFFF',
    purple: '#9B7FA8', // Фиолетовые цветы
    green: '#6B8E5A', // Зеленые листья
}

const tonalAccents = [
    palette.accentSoft,
    palette.accent,
    palette.accentMuted,
    palette.accentStrong,
    palette.purple,
    palette.green,
]

function App() {
    const phoneNumber = '+998 95 737 33 30'
    const telegramLink = 'https://t.me/floriabuket'
    const instagramLink = 'https://www.instagram.com/floria.uz?igsh=bjlveGR4cnNrZjNr'
    const address = "Kichik Halqa Yo'li, Toshkent, O'zbekiston"
    const coordinates = '41.339906° N, 69.208473° E'
    const mapLink =
        'https://maps.apple.com/place?address=Small%20Ring%20Road,%20Tashkent,%20Uzbekistan&coordinate=41.339906,69.208473&name=Point&map=h'

    const StarIcon = ({ className = 'w-8 h-8' }) => (
        <svg
            className={className}
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
                fill='currentColor'
            />
        </svg>
    )

    const RocketIcon = ({ className = 'w-8 h-8' }) => (
        <svg
            className={className}
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M4.5 16.5C4.5 16.5 2 14 2 11.5C2 9 4.5 6.5 7 4.5C9.5 2.5 12 2 12 2C12 2 12.5 4.5 14.5 7C16.5 9.5 19 12 19 12C19 12 16.5 14.5 14 16.5C11.5 18.5 9 19 9 19L4.5 16.5Z'
                fill='currentColor'
            />
            <path d='M9 19L4.5 16.5L2 19L4.5 21.5L9 19Z' fill='currentColor' />
            <path d='M9 19L12 22L14.5 19.5L12 16.5L9 19Z' fill='currentColor' />
        </svg>
    )

    const ClockIcon = ({ className = 'w-8 h-8' }) => (
        <svg
            className={className}
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle cx='12' cy='12' r='10' fill='currentColor' opacity='0.2' />
            <path
                d='M12 6V12L16 14'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                fill='none'
            />
            <circle cx='12' cy='12' r='1.5' fill='currentColor' />
            <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' fill='none' />
        </svg>
    )

    const FlowerIcon = ({ className = 'w-12 h-12' }) => (
        <svg
            className={className}
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle cx='12' cy='12' r='4' fill='currentColor' />
            <ellipse cx='12' cy='8' rx='3' ry='5' fill='currentColor' transform='rotate(0)' />
            <ellipse cx='16' cy='12' rx='3' ry='5' fill='currentColor' transform='rotate(90)' />
            <ellipse cx='12' cy='16' rx='3' ry='5' fill='currentColor' transform='rotate(180)' />
            <ellipse cx='8' cy='12' rx='3' ry='5' fill='currentColor' transform='rotate(270)' />
            <ellipse cx='14' cy='10' rx='2' ry='4' fill='currentColor' transform='rotate(45)' />
            <ellipse cx='14' cy='14' rx='2' ry='4' fill='currentColor' transform='rotate(135)' />
            <ellipse cx='10' cy='14' rx='2' ry='4' fill='currentColor' transform='rotate(225)' />
            <ellipse cx='10' cy='10' rx='2' ry='4' fill='currentColor' transform='rotate(315)' />
            <circle cx='12' cy='12' r='2' fill='currentColor' opacity='0.5' />
        </svg>
    )

    const LocationIcon = ({ className = 'w-10 h-10' }) => {
        return (
            <img
                src='https://i.ibb.co/DfRR2jrn/google-location-icon-16.png'
                alt='Location'
                className={className}
                style={{ opacity: 0.85 }}
            />
        )
    }

    const PhoneIcon = ({ className = 'w-10 h-10' }) => {
        return (
            <img
                src='https://i.ibb.co/rRBbxKbL/46854.png'
                alt='Phone'
                className={className}
                style={{ opacity: 0.85 }}
            />
        )
    }

    const TelegramIcon = ({ className = 'w-10 h-10' }) => {
        return (
            <img
                src='https://i.ibb.co/C3b9LKqq/telegram-4.png'
                alt='Telegram'
                className={className}
                style={{ opacity: 0.85 }}
            />
        )
    }

    const InstagramIcon = ({ className = 'w-10 h-10' }) => {
        return (
            <img
                src='https://i.ibb.co/Y7dCWdGd/instagram-53.png'
                alt='Instagram'
                className={className}
                style={{ opacity: 0.85 }}
            />
        )
    }

    const DeliveryIcon = ({ className = 'w-6 h-6' }) => {
        return (
            <svg
                className={className}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
                    fill='currentColor'
                />
            </svg>
        )
    }

    const CarIcon = ({ className = 'w-10 h-10' }) => {
        const gradientId = useId()
        return (
            <svg
                className={className}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <defs>
                    <linearGradient
                        id={`${gradientId}-car`}
                        x1='2'
                        y1='4'
                        x2='22'
                        y2='20'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop offset='0%' stopColor={palette.accent} />
                        <stop offset='100%' stopColor={palette.accentStrong} />
                    </linearGradient>
                    <linearGradient
                        id={`${gradientId}-glass`}
                        x1='6'
                        y1='7'
                        x2='18'
                        y2='13'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop offset='0%' stopColor='#FFFFFF' stopOpacity='0.85' />
                        <stop offset='100%' stopColor={palette.accentSoft} stopOpacity='0.6' />
                    </linearGradient>
                    <linearGradient
                        id={`${gradientId}-wheel`}
                        x1='4'
                        y1='15'
                        x2='8'
                        y2='19'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop offset='0%' stopColor='#2C2C2A' />
                        <stop offset='100%' stopColor='#1A1A19' />
                    </linearGradient>
                </defs>
                {/* Кузов машины */}
                <path
                    d='M20 9.5C20 8.67 19.33 8 18.5 8H17L15.5 5.5C15.22 4.89 14.62 4.5 14 4.5H10C9.38 4.5 8.78 4.89 8.5 5.5L7 8H5.5C4.67 8 4 8.67 4 9.5V17.5C4 18.33 4.67 19 5.5 19H6C6.55 19 7 18.55 7 18V17H17V18C17 18.55 17.45 19 18 19H18.5C19.33 19 20 18.33 20 17.5V9.5Z'
                    fill={`url(#${gradientId}-car)`}
                    stroke={palette.accentStrong}
                    strokeWidth='0.5'
                />
                {/* Лобовое стекло */}
                <path d='M7 9H17L16.5 10.5H7.5L7 9Z' fill={`url(#${gradientId}-glass)`} />
                {/* Боковое стекло */}
                <path
                    d='M7.5 10.5H16.5V12.5H7.5V10.5Z'
                    fill={`url(#${gradientId}-glass)`}
                    opacity='0.6'
                />
                {/* Переднее колесо */}
                <circle cx='7' cy='18' r='2.5' fill={`url(#${gradientId}-wheel)`} />
                <circle cx='7' cy='18' r='1.5' fill='#2F2F2C' />
                <circle cx='7' cy='18' r='0.8' fill='#F4F0EB' opacity='0.5' />
                {/* Заднее колесо */}
                <circle cx='17' cy='18' r='2.5' fill={`url(#${gradientId}-wheel)`} />
                <circle cx='17' cy='18' r='1.5' fill='#2F2F2C' />
                <circle cx='17' cy='18' r='0.8' fill='#F4F0EB' opacity='0.5' />
                {/* Решетка радиатора */}
                <rect
                    x='10'
                    y='9'
                    width='4'
                    height='1.5'
                    rx='0.3'
                    fill={palette.accentStrong}
                    opacity='0.5'
                />
                {/* Фары */}
                <circle cx='6' cy='10.5' r='1' fill={palette.accentSoft} opacity='0.8' />
                <circle cx='18' cy='10.5' r='1' fill={palette.accentSoft} opacity='0.8' />
            </svg>
        )
    }

    const Logo = () => {
        const [imgError, setImgError] = useState(false)

        return (
            <div className='relative'>
                {!imgError ? (
                    <img
                        src='https://i.ibb.co/yc9N36MN/9e25abe3-5901-4daf-b8ff-025639784e95.png'
                        alt='FLORIA FLOWERS Logo'
                        className='mx-auto w-[300px] h-[150px] object-cover drop-shadow-lg'
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className='mx-auto w-[300px] h-[150px] flex items-center justify-center'>
                        <h1 className='text-4xl font-bold text-white font-dancing gradient-text'>
                            FLORIA FLOWERS
                        </h1>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div
            className='min-h-screen flex items-center justify-center p-4 relative overflow-hidden'
            style={{
                background: `radial-gradient(circle at 20% 20%, ${palette.background}, ${palette.overlay} 65%)`,
            }}
        >
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(232,165,183,0.18),transparent_55%),radial-gradient(circle_at_75%_65%,rgba(196,30,58,0.2),transparent_60%),radial-gradient(circle_at_50%_50%,rgba(74,26,31,0.9),transparent_80%)] animate-gentle-pulse'></div>

                <div className='absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#C41E3A]/30 via-[#8B1538]/25 to-[#4A1A1F]/30 rounded-full blur-3xl animate-gentle-pulse animate-rotate-slow'></div>
                <div
                    className='absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#E8A5B7]/25 via-[#8B1538]/25 to-[#5C1F25]/30 rounded-full blur-3xl animate-gentle-pulse animate-rotate-slow'
                    style={{ animationDelay: '1s' }}
                ></div>
                <div
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#E8A5B7]/10 via-[#C41E3A]/10 to-[#8B1538]/10 rounded-full blur-3xl animate-gentle-pulse animate-rotate-slow'
                    style={{ animationDelay: '2s' }}
                ></div>
                <div
                    className='absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-[#9B7FA8]/15 to-[#4A1A1F]/10 rounded-full blur-3xl animate-gentle-pulse'
                    style={{ animationDelay: '0.5s' }}
                ></div>
                <div
                    className='absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-br from-[#6B8E5A]/10 to-[#8B1538]/10 rounded-full blur-3xl animate-gentle-pulse animate-rotate-slow'
                    style={{ animationDelay: '1.5s' }}
                ></div>
            </div>

            <div className='max-w-md w-full relative z-10 animate-fade-in'>
                <div className='text-center mb-14 animate-slide-up'>
                    <div className='mb-10 flex justify-center'>
                        <div className='relative'>
                            <Logo />
                            <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                                <div className='w-32 h-32 bg-white/10 rounded-full blur-2xl animate-gentle-pulse'></div>
                            </div>
                        </div>
                    </div>

                    <div
                        className='flex flex-wrap items-center justify-center gap-4 text-white text-sm font-medium animate-fade-in mt-8'
                        style={{ animationDelay: '0.4s' }}
                    >
                        <div className='flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/10 hover:border-white/30 transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg hover:shadow-[#C41E3A]/20'>
                            <StarIcon className='w-6 h-6 text-white' />
                            <span className='font-montserrat font-semibold text-base'>
                                Eng yangi gullar
                            </span>
                        </div>
                        <div className='flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/10 hover:border-white/30 transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg hover:shadow-[#C41E3A]/20'>
                            <DeliveryIcon className='w-6 h-6 text-white' />
                            <span className='font-montserrat font-semibold text-base'>
                                Tez yetkazib berish
                            </span>
                        </div>
                        <div className='flex items-center gap-3 px-5 py-3 glass rounded-full border border-white/10 hover:border-white/30 transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg hover:shadow-[#C41E3A]/20'>
                            <ClockIcon className='w-6 h-6 text-white' />
                            <span className='font-montserrat font-semibold text-base'>24/7</span>
                        </div>
                    </div>
                </div>

                <div className='space-y-6 animate-slide-up' style={{ animationDelay: '0.3s' }}>
                    <a
                        href={telegramLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative w-full overflow-hidden text-[#722F37] font-bold py-7 px-8 rounded-[2rem] transform transition-all duration-500 ease-out flex items-center justify-center gap-4 button-magical-pink'
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-95 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#C41E3A]/10 via-[#722F37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out'></div>
                        <div className='absolute top-2 right-4 w-2 h-2 bg-[#C41E3A] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-125'></div>
                        <div className='absolute bottom-2 left-6 w-1.5 h-1.5 bg-[#722F37] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-125'></div>
                        <div className='relative z-10 flex items-center gap-4'>
                            <DeliveryIcon className='w-10 h-10 drop-shadow-lg' />
                            <span className='text-2xl font-montserrat font-bold drop-shadow-lg'>
                                Buyurtma berish
                            </span>
                        </div>
                        <div className='absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41E3A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                    </a>

                    <a
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className='group relative w-full overflow-hidden text-[#722F37] font-bold py-7 px-8 rounded-[2rem] transform transition-all duration-500 ease-out flex items-center justify-center gap-4 button-magical-pink'
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-95 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#C41E3A]/10 via-[#722F37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out'></div>
                        <div className='absolute top-2 right-4 w-2 h-2 bg-[#C41E3A] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-125'></div>
                        <div className='absolute bottom-2 left-6 w-1.5 h-1.5 bg-[#722F37] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-125'></div>
                        <div className='relative z-10 flex items-center gap-4'>
                            <PhoneIcon className='w-10 h-10 drop-shadow-lg' />
                            <span className='text-2xl font-montserrat font-bold drop-shadow-lg'>
                                Qo'ng'iroq qilish
                            </span>
                        </div>
                        <div className='absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41E3A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                    </a>

                    <a
                        href='https://t.me/floria_flowers_uz'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative w-full overflow-hidden text-[#722F37] font-bold py-7 px-8 rounded-[2rem] transform transition-all duration-500 ease-out flex items-center justify-center gap-4 button-magical-blue'
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-95 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#C41E3A]/10 via-[#722F37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out'></div>
                        <div className='absolute top-3 right-6 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-125'></div>
                        <div className='absolute bottom-3 left-4 w-1.5 h-1.5 bg-[#E8A5B7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-125'></div>
                        <div className='relative z-10 flex items-center gap-4'>
                            <TelegramIcon className='w-10 h-10 drop-shadow-lg' />
                            <span className='text-2xl font-montserrat font-bold drop-shadow-lg'>
                                Telegram kanalimiz
                            </span>
                        </div>
                        <div className='absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41E3A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                    </a>

                    <a
                        href={instagramLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative w-full overflow-hidden text-[#722F37] font-bold py-7 px-8 rounded-[2rem] transform transition-all duration-500 ease-out flex items-center justify-center gap-4 button-magical-instagram'
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-95 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#C41E3A]/10 via-[#722F37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out'></div>
                        <div className='absolute top-2 right-5 w-2 h-2 bg-[#C41E3A] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-125'></div>
                        <div className='absolute bottom-2 left-5 w-1.5 h-1.5 bg-[#722F37] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-125'></div>
                        <div className='relative z-10 flex items-center gap-4'>
                            <InstagramIcon className='w-10 h-10 drop-shadow-lg' />
                            <span className='text-2xl font-montserrat font-bold drop-shadow-lg'>
                                Instagram sahifamiz
                            </span>
                        </div>
                        <div className='absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41E3A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                    </a>

                    <a
                        href={mapLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative w-full overflow-hidden text-[#722F37] font-bold py-7 px-8 rounded-[2rem] transform transition-all duration-500 ease-out flex items-center justify-center gap-4 button-magical-pink'
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-95 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#C41E3A]/10 via-[#722F37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out'></div>
                        <div className='absolute top-2 right-4 w-2 h-2 bg-[#C41E3A] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-125'></div>
                        <div className='absolute bottom-2 left-6 w-1.5 h-1.5 bg-[#722F37] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-125'></div>
                        <div className='relative z-10 flex items-center gap-4'>
                            <LocationIcon className='w-10 h-10 drop-shadow-lg' />
                            <div className='flex flex-col items-start'>
                                <span className='text-2xl font-montserrat font-bold drop-shadow-lg'>
                                    Manzil
                                </span>
                                <span className='text-sm font-montserrat text-black drop-shadow-md'>
                                    {address}
                                </span>
                            </div>
                        </div>
                        <div className='absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41E3A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out'></div>
                    </a>
                </div>

                <div
                    className='mt-16 text-center animate-fade-in'
                    style={{ animationDelay: '0.6s' }}
                >
                    <div className='inline-block px-8 py-4 glass rounded-full border-2 border-white/10 shadow-lg hover:border-white/25 transition-all duration-500 ease-out hover:shadow-xl hover:shadow-[#C41E3A]/15'>
                        <p className='text-white opacity-80 text-sm font-montserrat font-semibold flex items-center justify-center'>
                            <span className='gradient-text font-montserrat font-bold'>
                                © 2024 FLORIA FLOWERS
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
