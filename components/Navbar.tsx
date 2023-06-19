type NavOption = {
  id: number;
  label: string;
};

type NavbarProps = {
  options: NavOption[];
  selectedOption: number;
  onOptionSelect: (optionId: number) => void;
};

const Navbar: React.FC<NavbarProps> = ({ options, selectedOption, onOptionSelect }) => {
  return (
    <nav className='mb-4'>
      <ul className="flex border-b border-black">
        {options.map((option, index) => (
          <li
            key={option.id}
            className={`mr-4 ${selectedOption === option.id ? 'font-bold' : ''} ${
              index === options.length - 1 ? 'ml-auto' : ''
            }`}
          >
            <div className="relative">
              <a
                href="#xd"
                onClick={() => onOptionSelect(option.id)}
                className="text-black-500 text-lg ml-2 mr-2"
              >
                {option.label}
              </a>
              {selectedOption === option.id && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-black"></div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
