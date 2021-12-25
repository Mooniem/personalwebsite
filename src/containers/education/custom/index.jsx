import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Timeline, WideTimelineCard } from "@ui/timeline";
import { InnerType } from "@utils/types";
import ContentTitle from "@components/content-title";

const EducationArea = ({ data, id }) => {
    return (
        <div className="personal-experience-inner mt--40" id={id}>
            <div className="row">
                {data?.inner?.map((content, i) => (
                    <div
                        className={cn("col", i !== 0 && "mt_md--60 mt_sm--60")}
                        key={content.id}
                    >
                        <div className="content">
                            {content?.section_title && (
                                <ContentTitle {...content.section_title} />
                            )}
                            {content?.items && (
                                <Timeline>
                                    {content.items?.map((item) => (
                                        <WideTimelineCard
                                            key={item.id}
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            date={item.date}
                                            desc={item.description}
                                        />
                                    ))}
                                </Timeline>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

EducationArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        inner: PropTypes.arrayOf(PropTypes.shape(InnerType)),
    }),
};

EducationArea.defaultProps = {
    id: "educations",
};

export default EducationArea;
