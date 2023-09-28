{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    const shark = document.getElementById('shark');\
    const ground = document.getElementById('ground');\
    const startButton = document.getElementById('start-button');\
\
    let isJumping = false;\
\
    startButton.addEventListener('click', startGame);\
    document.addEventListener('keydown', jump);\
\
    function startGame() \{\
        startButton.style.display = 'none';\
        document.addEventListener('keydown', jump);\
        shark.style.animation = 'swim 0.5s infinite alternate';\
        ground.style.animation = 'scroll 2s linear infinite';\
    \}\
\
    function jump(event) \{\
        if (event.keyCode === 32 && !isJumping) \{\
            isJumping = true;\
            shark.style.animation = 'none';\
            shark.style.transform = 'translateY(-30px)';\
            setTimeout(() => \{\
                shark.style.transform = 'translateY(0)';\
                shark.style.animation = 'swim 0.5s infinite alternate';\
                isJumping = false;\
            \}, 500);\
        \}\
    \}\
\});\
}