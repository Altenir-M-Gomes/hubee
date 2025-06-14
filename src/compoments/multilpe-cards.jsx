import person from '../assets/person.svg';
import faces from '../assets/faces.svg';
import heart from '../assets/heart.svg';
import mala from '../assets/mala.svg';
import school from '../assets/school.svg';
import ecology from '../assets/ecology.svg';
export default function MultilpeCards() {
    return (
        <div className="grid grid-cols-3 gap-4 py-10">
            <div
                key='1'
                className="bg-blue-600 text-white flex items-center justify-center rounded-xl h-20 w-20 p-4 mx-auto"
            >
                <img
                    src={person}
                    alt="Person"
                    className="rounded-[2vw] z-10"
                />
            </div>
            <div
                key='2'
                className="bg-blue-600 text-white flex items-center justify-center rounded-xl h-20 w-20 p-4 mx-auto"
            >
                <img
                    src={faces}
                    alt="Faces"
                    className="rounded-[2vw] z-10"
                />
            </div>

            <div
                key='3'
                className="bg-blue-600 text-white flex items-center justify-center rounded-xl h-20 w-20 p-4 mx-auto"
            >
                <img
                    src={heart}
                    alt="Heart"
                    className="rounded-[2vw] z-10"
                />
            </div>
            <div
                key='4'
                className="bg-blue-600 text-white flex items-center justify-center rounded-xl h-20 w-20 p-4 mx-auto"
            >
                <img
                    src={mala}
                    alt="Mala"
                    className="rounded-[2vw] z-10"
                />
            </div>
            <div
                key='5'
                className="bg-blue-600 text-white flex items-center justify-center rounded-xl h-20 w-20 p-4 mx-auto"
            >
                <img
                    src={school}
                    alt="school"
                    className="rounded-[2vw] z-10"
                />
            </div>
            <div
                key='6'
                className="bg-blue-600 text-white flex items-center justify-center rounded-xl h-20 w-20 p-4 mx-auto"
            >
                <img
                    src={ecology}
                    alt="ecology"
                    className="rounded-[2vw] z-10"
                />
            </div>

        </div>
    );
}