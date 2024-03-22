import Image from 'next/image';
import vector1 from '../../public/assets/images/Vector1.svg';
import vector2 from '../../public/assets/images/Vector2.svg';
import vector3 from '../../public/assets/images/Vector3.svg';

const Wave = () => {
    return (
    <div className='flex justify-center relative z-0'>
        <div className='animate-wave absolute bottom-0'>
        <Image
            src={vector1}
            alt="Wave Vector 1"
            width={999}
            height={999}
            className='w-screen'
        />
        </div>
        <div className='animate-wave absolute bottom-0'>
            <Image
            src={vector2}
            alt="Wave Vector 2"
            width={999}
            height={999}
            className='w-screen'
            />
        </div>
        <div className='animate-wave absolute bottom-0'>
            <Image
            src={vector3}
            alt="Wave Vector 3"
            width={999}
            height={999}
            className='w-screen'
            />
        </div>
    </div>
    );
};

export default Wave;
