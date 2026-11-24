// Marks copy the site owner still has to supply. Search the codebase for
// "[ADD:" before publishing; nothing wrapped in this should ship.
function Placeholder({ children }) {
  return (
    <mark className="rounded px-1 bg-yellow-300 text-black font-semibold not-italic">
      [ADD: {children}]
    </mark>
  );
}

export default Placeholder;
