import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import Avatar from "./Avater";

const Table = ({ data, columns, space, color }) => {
  let tableSpaceClass = "";

  if (space === "small") {
    tableSpaceClass = "border-spacing-y-5";
  } else if (space === "large") {
    tableSpaceClass = "border-spacing-y-10";
  }

  const headers = columns.map((column, index) => {
    return (
      <th
        key={`headCell-${index}`}
        className="!z-0 px-2 py-[15px] text-left font-regular">
        {column.title}
      </th>
    );
  });

  const rows = !data?.length ? (
    <tr>
      <td colSpan={columns.length}>No data</td>
    </tr>
  ) : (
    data?.map((row, index) => {
      return (
        <tr key={`row-${index}`} className="bg-meke-400 hover:opacity-[70%]">
          {columns.map((column, index2) => {
            const value = column.render
              ? column.render(column, row)
              : row[column.key];

            return (
              <td key={`cell-${index2}`} className={`px-2 py-[15px] `}>
                {index2 === 0 ? (
                  <div className="relative items-center">
                    {row.image_profile ? (
                      <Avatar img={row.image_profile} width={80} height={80} />
                    ) : (
                      <Avatar
                        initials={row.name.substring(0, 2)}
                        width={80}
                        height={80}
                      />
                    )}
                  </div>
                ) : (
                  value
                )}
                {index2 === columns.length - 1 && (
                  <div className="flex gap-[15px] md:gap-[30px] ">
                    <button>
                      <RiEditFill size={24} className="text-bt_additional" />
                    </button>

                    <button>
                      <MdDelete
                        size={24}
                        className="rounded text-bt_tertiary"
                      />
                    </button>
                  </div>
                )}
              </td>
            );
          })}
        </tr>
      );
    })
  );

  return (
    <div className="overflow-x-auto">
      <table
        className={`w-full table-auto border-separate border-spacing-x-0 text-small font-regular md:text-base  text-${color} ${tableSpaceClass}`}>
        <colgroup>
          {columns.map((_, index) => (
            <col key={`col-${index}`} className="w-auto" />
          ))}
        </colgroup>
        <thead className="bg-meke-500">
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
