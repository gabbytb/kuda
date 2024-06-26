const NgFlag = (props) => {
    return (
        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
            <circle opacity={0.3} cx={15} cy={15} r={15} fill="#008751" />
            <mask
            id="mask0_37774_3385_bc"
            maskUnits="userSpaceOnUse"
            x={6}
            y={7}
            width={18}
            height={16}
            style={{
                maskType: "alpha",
            }}
            >
            <rect
                x={6.91406}
                y={7.29712}
                width={16.1724}
                height={15.4023}
                rx={3}
                fill="#E94D1E"
            />
            </mask>
            <g mask="url(#mask0_37774_3385_bc)">
            <g clipPath="url(#clip0_37774_3385_bc)">
                <path
                d="M0.324219 4.1355H29.5134V26.0274H0.324219V4.1355Z"
                fill="#008751"
                />
                <path
                d="M11.1875 4.05444H19.2956V25.9463H11.1875V4.05444Z"
                fill="white"
                />
            </g>
            </g>
            <defs>
            <clipPath id="clip0_37774_3385_bc">
                <rect
                width={29.1892}
                height={21.8919}
                fill="white"
                transform="translate(0.324219 4.1355)"
                />
            </clipPath>
            </defs>
        </svg>
    );
};
export default NgFlag;
