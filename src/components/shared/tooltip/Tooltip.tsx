import { useEffect } from "react";
import ReactDOM from "react-dom";
import { ITooltip, Tooltip as ReactTooltip } from "react-tooltip";


interface TooltipProps extends ITooltip {
  background?: string;
  color?: string;
}

const domNode = document.createElement('div');

const Tooltip = ({ background, color, ...props }: TooltipProps) => {
  useEffect(() => {
    if (!document.body.contains(domNode)) {
      document.body.appendChild(domNode);
    }

    // Clean-up element from DOM when not required
    return () => {
      if (document.body.contains(domNode)) {
        document.body.removeChild(domNode);
      }
    };
  }, []);

  return ReactDOM.createPortal(
    <ReactTooltip
      style={{ background, color }}
      {...props}
    />,
    domNode
  );
}

export default Tooltip;
