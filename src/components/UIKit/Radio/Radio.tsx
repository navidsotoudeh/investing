// import cn from 'clsx'
import React, { useState, useEffect } from "react";
import useComponentVisible from "../../../hooks/useComponentVisible";
export interface IProps {
  className?: string;
  name: string;
  hasError?: boolean;
  checked?: boolean;
  isSubmitted?: boolean;
  isDisabled?: boolean;
  value?: boolean | string | number;
  radioOptions?: {
    label?: string;
    value?: number | string;
  }[];
  onChange: (e: any) => void;
}

const Radio: React.FC<IProps> = (props) => {
  const { onChange, value, isDisabled, radioOptions } = props;
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const [items, setItems] = useState<any>([]);
  useEffect(() => {
    //this is for set default value
    if (value === undefined) {
      const formattedState = radioOptions!.map((ele, index) => ({
        id: index,
        value: ele.value,
        isChecked: false,
        isHovered: false,
        isActive: false,
      }));
      setItems(formattedState);
    } else {
      const newState = radioOptions!.map((ele, index) => {
        if (ele.value == value) {
          return {
            id: index,
            value: ele.value,
            isChecked: true,
            isHovered: false,
            isActive: false,
          };
        }
        return {
          id: index,
          value: ele.value,
          isChecked: false,
          isHovered: false,
          isActive: false,
        };
      });
      setItems(newState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClicked = (index: number) => {
    const newState = items.map((obj: any) => {
      if (obj.id === index) {
        return { ...obj, isChecked: true, isActive: true };
      }
      return { ...obj, isChecked: false, isActive: false };
    });
    setItems(newState);
  };
  const onHovered = (index: number) => {
    const newState = items.map((obj: any) => {
      if (obj.id === index) {
        return { ...obj, isHovered: true };
      }
      return obj;
    });
    setItems(newState);
  };
  const onMouseOut = (index: number) => {
    const newState = items.map((obj: any) => {
      if (obj.id === index) {
        return { ...obj, isHovered: false };
      }
      return obj;
    });
    setItems(newState);
  };
  useEffect(() => {
    if (!isComponentVisible) {
      const newState = items.map((obj: any) => ({ ...obj, isActive: false }));
      setItems(newState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComponentVisible]);
  return (
    <>
      <div className="flex gap-4">
        {radioOptions?.map((option, index) => {
          // @ts-ignore
          return (
            <div
              className="relative flex items-center gap-2 hover:cursor-pointer"
              key={index}
              onClick={() => {
                !isDisabled && onClicked(index);
                !isDisabled && setIsComponentVisible(true);
                !isDisabled && onChange(option.value);
              }}
              onMouseEnter={() => !isDisabled && onHovered(index)}
              onMouseLeave={() => !isDisabled && onMouseOut(index)}
              ref={ref}
            >
              <div
                className={`flex h-[20px] w-[20px] items-center justify-center rounded-full
                 ${
                   items.filter((ele: any) => ele.id === index)[0]?.isHovered
                     ? "border border-primary-60"
                     : "border border-text-10"
                 }
                 ${
                   items.filter((ele: any) => ele.id === index)[0]?.isActive
                     ? "outline outline-2 outline-blue-700"
                     : ""
                 }
                  ${
                    items.filter((ele: any) => ele.id === index)[0]?.isChecked
                      ? "bg-red-600"
                      : ""
                  }
                  ${
                    items.filter((ele: any) => ele.id === index)[0]
                      ?.isChecked &&
                    items.filter((ele: any) => ele.id === index)[0]?.isHovered
                      ? "bg-red-700"
                      : ""
                  }
                    ${
                      isDisabled &&
                      items.filter((ele: any) => ele.id === index)[0]?.isChecked
                        ? "bg-surface-50"
                        : ""
                    }
                
                         `}
              ></div>
              <span
                className={`${isDisabled ? "text-text-20" : "text-teal-60"}`}
              >
                {option?.label}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Radio;
