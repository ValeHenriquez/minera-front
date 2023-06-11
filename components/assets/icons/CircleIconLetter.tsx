interface CircleIconProps {
    text: string;
}

const CircleIcon: React.FC<CircleIconProps> = ({ text }) => {
    return (
        <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-white p-2">
            <p className="text-white">{text}</p>
        </div>

    );
};

export default CircleIcon;