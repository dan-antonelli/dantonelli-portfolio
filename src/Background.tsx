export default function Background() {
  return (
    <div className="background-shapes">
      <svg className="shape rectangle" width="300" height="200" viewBox="0 0 300 200">
        <defs>
          <pattern
            id="stripe-pattern-1"
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="10" stroke="#e0e0e0" strokeWidth="8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stripe-pattern-1)" />
      </svg>

      <svg className="shape circle" width="200" height="200" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="stripe-pattern-2"
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
            patternTransform="rotate(135)"
          >
            <line x1="0" y1="0" x2="0" y2="10" stroke="#e5e5e5" strokeWidth="8" />
          </pattern>
        </defs>
        <circle cx="100" cy="100" r="100" fill="url(#stripe-pattern-2)" />
      </svg>

      <svg className="shape triangle" width="200" height="173" viewBox="0 0 200 173">
        <defs>
          <pattern
            id="stripe-pattern-3"
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
            patternTransform="rotate(0)"
          >
            <line x1="0" y1="0" x2="0" y2="10" stroke="#ebebeb" strokeWidth="8" />
          </pattern>
        </defs>
        <polygon points="100,0 200,173 0,173" fill="url(#stripe-pattern-3)" />
      </svg>
    </div>
  );
}
