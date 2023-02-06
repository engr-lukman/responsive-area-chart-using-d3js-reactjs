import { useEffect, useRef, useState } from 'react';

import AreaChart from './AreaChart';
import { randomNumber } from 'utils/helpers';

const Feature = () => {
  const margin = { top: 20, right: 10, bottom: 20, left: 30 };
  const [data, setData] = useState<any[]>([]);
  const svgLargeRef: any = useRef<SVGSVGElement>();
  const svgMediumRef: any = useRef<SVGSVGElement>();
  const svgSmallRef: any = useRef<SVGSVGElement>();

  useEffect(() => {
    const makeRandomData = () => {
      setData([]);
      ['JS', 'Python', '.Net', 'Java', 'GoLang', 'UI/UX']?.map((label) => {
        setData((prevData) => [...prevData, { label, value: randomNumber(10, 99), fillColor: `#${randomNumber()}` }]);
      });

      setTimeout(() => {
        makeRandomData();
      }, 1000 * 10);
    };

    makeRandomData();
  }, []);

  return (
    <div className="relative px-5 py-2">
      <div className="flex justify-center">
        <div className="w-[90vw] h-full">
          <h2 className="flex justify-between items-center font-semibold text-black mb-2">D3.js Chart</h2>
          <div className="flex w-full h-[75vh] justify-center items-start border border-dashed border-black text-white p-4 space-x-2">
            <div ref={svgLargeRef} className="w-5/12 h-72 border border-gray-300 p-1">
              <AreaChart data={data} svgWrapperRef={svgLargeRef} margin={margin} isYaxisRight={false} />
            </div>
            <div ref={svgMediumRef} className="w-4/12 h-72 border border-gray-300 p-1">
              <AreaChart data={data} svgWrapperRef={svgMediumRef} margin={margin} isYaxisRight={false} />
            </div>
            <div ref={svgSmallRef} className="w-3/12 h-72 border border-gray-300 p-1">
              <AreaChart
                data={data}
                svgWrapperRef={svgSmallRef}
                margin={{ ...margin, left: 10, right: 30 }}
                isYaxisRight={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
