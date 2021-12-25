import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const WideTimelineCard = ({
    title,
    subtitle,
    date,
    desc,
    layout,
    className,
}) => {
    return (
        <div className={cn("resume-single-list", className)}>
            <div
                className={cn(
                    "inner",
                    layout === 2 && "psudo-after-none psudo-after-none"
                )}
            >
                <div className="heading">
                    <div className="title">
                        <h4>{title}</h4>
                        <span>{subtitle}</span>
                    </div>
                    {date && (
                        <div className="date">
                            <span>{date}</span>
                        </div>
                    )}
                </div>
                <p className="description">{desc}</p>
            </div>
        </div>
    );
};

WideTimelineCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    date: PropTypes.string,
    desc: PropTypes.string.isRequired,
    className: PropTypes.string,
    layout: PropTypes.oneOf([1, 2]),
};

WideTimelineCard.defaultProps = {
    layout: 1,
};

export default WideTimelineCard;
