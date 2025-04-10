type StatBarProps = {
  level: string | undefined;
};

const StatBar = ({ level }: StatBarProps) => {
  const levelNumber = parseInt(level ?? "0", 10);

  return (
    <div className="flex  items-center w-[100%]">
      {/* STAT BAR BACKGROUND */}
      <div className="flex items-center h-12 w-[95%] bg-backround border border-foreground">
        {/* STAT BAR LEVEL */}
        <div
          style={{ width: `${levelNumber}%` }}
          className="relative h-11 bg-[#162907]"
        >
          {/* STAT LEVEL NUMBER */}
          <p className="absolute top-[7px] right-2 text-[#dec400] text-2xl font-bold">
            {levelNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatBar;
