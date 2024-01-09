export default function Overlays() {
    return (
        <div href="/overlays" className="container mx-auto mb-6 w-full h-fit sm:w-1/2 bg-neutral-50 rounded-lg ring-2 ring-purple-300 shadow-xl shadow-purple-300 justify-evenly gap-4 p-4">
            <span className="font-bold text-purple-300">Notification Box:</span>
            <div>
                <label className="line-clamp-3">
                Warna Background:
                </label>
                <input type="text" name="hex-background" id="bg" className="border-b-4 w-full" />
                <input type="color" name="background" id="bg" className="w-full" />
            </div>
            <div>
                <label className="line-clamp-3">
                Warna Highlight:
                </label>
                <input type="text" name="hex-highlight" id="hl" className="border-b-4 w-full" />
                <input type="color" name="highlight" id="hl" className="w-full" />
            </div>
            <div>
                <label className="line-clamp-3">
                Warna Teks:
                </label>
                <input type="text" name="hex-text" id="txt" className="border-b-4 w-full" />
                <input type="color" name="text" id="txt" className="w-full" />
            </div>
            <div>
                <label className="line-clamp-3">
                Durasi Notifikasi (ms):
                </label>
                <input type="number" name="duration" id="duration" className="border-b-4 w-full" />
            </div>
            <div>
                <label className="line-clamp-3">
                Tanpa Border:
                </label>
                <input type="checkbox" name="border" id="border" />
            </div>
            <button className="ring">Simpan</button>
        </div>
    );
}