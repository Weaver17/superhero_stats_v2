import { getBorderColor } from "@/lib/utils";

type StatBarProps = {
  level: string | undefined;
};

const StatBar = ({ level }: StatBarProps) => {
  const levelNumber = parseInt(level ?? "0", 10);

  const barColor = getBorderColor(levelNumber);

  return (
    <div className="flex  items-center w-[100%]">
      {/* STAT BAR BACKGROUND */}
      <div className="flex items-center h-8 w-[95%] bg-backround border border-foreground md:h-10 lg:h-12">
        {/* STAT BAR LEVEL */}
        <div
          style={{ width: `${levelNumber}%` }}
          className={`relative h-7 ${barColor}  md:h-9 lg:h-11`}
        >
          {/* STAT LEVEL NUMBER */}
          <p
            className={`absolute top-[2px]  text-[#dec400] md:top-[6px] lg:top-[7px] lg:text-2xl lg:font-bold ${
              levelNumber > 50 ? "right-2" : "right-[-24px] lg:right-[-36px]"
            }`}
          >
            {Number.isNaN(levelNumber) || levelNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatBar;
