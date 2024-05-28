import CountUp from 'react-countup';

export default function YearCountUp({year}: {year: Number}) {

    let customers: number = 0;
    let packages: number = 0;
    let distance: number = 0;

    if (year === 2022) {
        customers = 95000
        packages = 250000
        distance = 3400000 
    }
    if (year === 2023) {
        customers = 110000
        packages = 350000
        distance = 4800000 
    }
    if (year === 2024) {
        customers = 135000
        packages = 410000
        distance = 5300000 
    }

    return (
        <div className='grid place-content-center text-4xl'>
            <div className='flex flex-col md:flex-row p-4 text-center'>
                <div className='p-2'>
                <h3 className='text-xl font-semibold'>Customers satisfied</h3>
                <CountUp
                    start={0}
                    end={customers}
                    duration={2.75}
                    className='text-orange-600'
                    />
                </div>
                <div className='p-2'>
                <h3 className='text-xl font-semibold'>Packages delivered</h3>
                <CountUp
                    start={0}
                    end={packages}
                    duration={2.75}
                    className='text-orange-600'
                    />
                </div>
                <div className='p-2'>
                <h3 className='text-xl font-semibold'>Distance travelled</h3>
                <CountUp
                    start={0}
                    end={distance}
                    duration={2.75}
                    suffix=' km'
                    className='text-orange-600'
                    />
                </div>
            
            </div>
        </div>
    )
}