import { useState } from 'react';

export function CtaDark() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    return (
        <div className="px-6 mb-20 md:mt-36">
            <div className="flex flex-col items-center text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-montserrat">
                    <span className="block degradedBlue bg-Orange">Newsletter</span>
                </h1>
                <p className="w-full mx-auto mt-5 text-base md:text-xl font-light font-montserrat tracking-wide text-center">
                    Receive our latest news directly in your inbox.
                </p>
                {/* Aquí reemplaza el iframe anterior por el nuevo iframe de Sendinblue */}
                <iframe
                    width="540"
                    height="355"
                    src="https://c80e6f6d.sibforms.com/serve/MUIFAHkKoc9QhpqduVnzyg4uHQ5PZO5PY9S9ffOYkD5iAh6b1kcxcH60WVybjobUrWY6BugAayYhuVLwWsH-HM2t6W2qn-tiTgOxFnmwRP_J6szR53lR-9E-guokzhTWTMGlhjP7S9Zik295HEjvbrLVT7bNSEdLoSkjKxq8Xn4x3r1EhHsAOH-o1I_16sGfNVW9M0aS4zT8TYs0"
                    frameBorder="0"
                    scrolling="auto"
                    allowFullScreen
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
                ></iframe>
            </div>

            {showSuccessModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-green-500 p-8 rounded shadow-lg text-center">
                        <p className="text-lg font-semibold mb-2">Subscription Successful!</p>
                        <p>You will receive our latest news shortly.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
