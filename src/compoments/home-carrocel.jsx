import cidade1 from '../assets/cidade1.svg';
import cidade2 from '../assets/cidade2.svg';

export default function HomeCarrocel() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="flex items-center space-x-[-80px] overflow-hidden">
                <img
                    src={cidade2}
                    alt="cidade 1"
                    className="w-[500px] h-[1000px] object-fill rounded-[2vw] z-10"
                />
                <img
                    src={cidade1}
                    alt="cidade 2"
                    className="w-[675px] h-[1200px] object-fill rounded-[2vw] z-20"
                />
                <img
                    src={cidade2}
                    alt="cidade 3"
                    className="w-[500px] h-[1000px] object-fill rounded-[2vw] z-10"
                />
            </div>
        </div>
    );
}
