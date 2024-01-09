import { useState } from 'react';

export default function Overlays() {
    const [backgroundColor, setBackgroundColor] = useState('#22c55e');
    const [highlightColor, setHighlightColor] = useState('#9333ea');
    const [textColor, setTextColor] = useState('#ffffff');
    const [duration, setDuration] = useState(5000);
    const [showBorder, setShowBorder] = useState(false);

    const handleColorChange = (colorType, event) => {
        switch (colorType) {
            case 'background':
                setBackgroundColor(event.target.value);
                break;
            case 'highlight':
                setHighlightColor(event.target.value);
                break;
            case 'text':
                setTextColor(event.target.value);
                break;
            default:
                break;
        }
    };

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };

    const handleBorderChange = () => {
        setShowBorder(!showBorder);
    };

    return (
        <div className="container mx-auto my-6 w-full h-fit sm:w-1/2 bg-neutral-50 rounded-lg ring-2 ring-purple-300 shadow-xl shadow-purple-300 justify-evenly gap-4 p-4">
            <span className="font-bold text-purple-300">Notification Box:</span>

            {['background', 'highlight', 'text'].map((colorType) => (
                <div key={colorType} className="mb-4 mx-auto">
                    <label className="line-clamp-3">{`Warna ${colorType.charAt(0).toUpperCase() + colorType.slice(1)}:`}</label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            name={`hex-${colorType}`}
                            value={colorType === 'background' ? backgroundColor : colorType === 'highlight' ? highlightColor : textColor}
                            onChange={(event) => handleColorChange(colorType, event)}
                            className="border-b-4 w-5/6 mr-4"
                        />
                        <input
                            type="color"
                            name={colorType}
                            value={colorType === 'background' ? backgroundColor : colorType === 'highlight' ? highlightColor : textColor}
                            onChange={(event) => handleColorChange(colorType, event)}
                            className="h-12 w-12"
                        />
                    </div>
                </div>
            ))}

            <div>
                <label className="line-clamp-3">Durasi Notifikasi (ms):</label>
                <input 
                    type="number"
                    min="1000"
                    max="30000"
                    step="1000"
                    name="duration" 
                    id="duration" 
                    value={duration} 
                    onChange={handleDurationChange}
                    className="border-b-4 w-5/6" />
            </div>

            <div>
                <label className="line-clamp-3">Tanpa Border:</label>
                <input
                    type="checkbox"
                    checked={showBorder}
                    onChange={handleBorderChange}
                    className="form-checkbox h-6 w-6 text-purple-300"
                />
            </div>
            <button className="shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer 
            hover:brightness-110 hover:animate-pulse  font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                Simpan
            </button>

        </div>
    );
}
