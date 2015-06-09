import React from 'react';

const Hull = React.createClass({

  render() {
    return (
      <svg {...this.props} className="svg-icon svg-icon-hull" width="90" height="45">
        <path className="svg-hull-upper" d="M89.933 3.434c-.058-1.116-.176-1.965-.25-2.544-.08-.582-.124-.89-.124-.89l-.16.882-.18 1.06c-.09.41-.18.88-.27 1.4-.2 1.044-.5 2.295-.87 3.682-.39 1.38-.89 2.888-1.57 4.397-.68 1.51-1.53 3.02-2.61 4.37-1.08 1.36-2.35 2.56-3.84 3.57-1.47 1.01-3.13 1.83-4.9 2.51-1.77.68-3.65 1.23-5.57 1.71-1.92.51-3.89.92-5.84 1.39-1.97.45-3.93.96-5.83 1.58-1.91.62-3.76 1.38-5.47 2.37-1.71.99-3.27 2.25-4.48 3.75-1.22 1.48-2.02 3.22-2.47 4.77-.16.53-.26 1.04-.34 1.53-.09-.49-.19-1-.34-1.52-.46-1.55-1.24-3.28-2.47-4.76-1.2-1.5-2.77-2.76-4.47-3.75-1.71-.99-3.57-1.74-5.47-2.37-1.91-.62-3.86-1.13-5.83-1.58-1.96-.47-3.93-.89-5.85-1.39-1.92-.47-3.8-1.02-5.57-1.7-1.77-.69-3.42-1.5-4.9-2.51-1.48-1.01-2.76-2.21-3.84-3.56s-1.92-2.86-2.6-4.36c-.68-1.51-1.18-3.02-1.56-4.39-.38-1.39-.67-2.64-.87-3.68-.1-.53-.19-1-.27-1.41C1.07 1.55 1 1.2.96.91L.86.003S.814.31.732.893c-.077.58-.193 1.44-.25 2.547C.42 4.54.372 5.9.462 7.47c.088 1.57.317 3.354.793 5.273.482 1.91 1.23 3.96 2.363 5.895C4.75 20.57 6.24 22.38 7.982 23.84c.864.738 1.787 1.403 2.745 1.978.95.593 1.94 1.107 2.943 1.545 2.004.915 4.075 1.537 6.116 2.072 2.05.503 4.078.91 6.052 1.252.978.172 1.95.34 2.907.506.942.177 1.87.355 2.784.525 1.8.38 3.51.794 5.03 1.37 1.53.572 2.89 1.288 3.99 2.202 2.24 1.78 3.38 4.45 3.93 6.435.14.5.25.953.34 1.354.1.39.17.74.21 1.03l.16.88.16-.88c.04-.29.11-.64.21-1.04.09-.41.2-.86.34-1.36.28-1 .7-2.16 1.33-3.3.64-1.14 1.48-2.25 2.6-3.14 1.1-.91 2.46-1.63 3.99-2.2 1.53-.58 3.23-.99 5.03-1.37l2.78-.53 2.91-.51c1.97-.34 4-.75 6.05-1.26 2.04-.54 4.11-1.16 6.12-2.08 1-.44 1.99-.96 2.94-1.55.95-.58 1.88-1.24 2.74-1.98 1.74-1.46 3.23-3.27 4.36-5.2 1.14-1.94 1.88-3.99 2.36-5.9.47-1.92.7-3.7.79-5.27.09-1.57.04-2.93-.02-4.04"/>
        <path className="svg-hull-lower" d="M45.207 32.233s-.036-.203-.107-.58c-.026-.19-.074-.42-.137-.68-.054-.262-.13-.56-.22-.887-.36-1.303-1.1-3.052-2.555-4.223-.715-.598-1.598-1.07-2.59-1.443-.994-.377-2.1-.65-3.27-.896-.598-.11-1.198-.228-1.81-.344-.622-.108-1.252-.222-1.888-.334-1.28-.224-2.598-.487-3.93-.82-1.325-.35-2.668-.76-3.972-1.36-.65-.285-1.29-.624-1.91-1.015-.62-.37-1.22-.81-1.78-1.29-1.133-.95-2.1-2.14-2.834-3.41-.738-1.27-1.222-2.61-1.534-3.86-.31-1.26-.46-2.43-.515-3.46-.058-1.03-.03-1.92.012-2.64.036-.72.112-1.28.164-1.67.06-.38.08-.58.08-.58l.11.59.11.69c.06.27.12.58.18.92.13.69.32 1.51.57 2.42.25.91.58 1.89 1.02 2.89.44.99.99 1.98 1.69 2.86.7.89 1.53 1.68 2.49 2.34.96.67 2.04 1.2 3.18 1.65 1.15.44 2.37.81 3.62 1.12 1.25.34 2.53.6 3.8.91 1.27.3 2.54.63 3.78 1.04 1.24.41 2.44.9 3.55 1.56 1.11.65 2.12 1.47 2.9 2.46.8.97 1.31 2.11 1.6 3.12.1.35.17.68.22 1 .06-.32.12-.65.22-1 .29-1.01.81-2.15 1.6-3.12.78-.99 1.8-1.81 2.91-2.46 1.11-.65 2.31-1.15 3.55-1.55 1.23-.41 2.5-.74 3.78-1.04 1.27-.31 2.55-.57 3.8-.91 1.25-.31 2.47-.67 3.62-1.11 1.15-.44 2.23-.98 3.18-1.64.96-.66 1.8-1.44 2.49-2.33.7-.88 1.25-1.87 1.69-2.86.44-.99.77-1.97 1.02-2.88.25-.9.44-1.72.57-2.41.06-.34.12-.65.18-.92.04-.27.08-.51.11-.69l.11-.58.08.59c.05.38.13.94.17 1.67.04.73.07 1.62.01 2.65-.05 1.03-.2 2.2-.51 3.458-.31 1.25-.8 2.59-1.53 3.86-.73 1.267-1.7 2.45-2.83 3.41-.56.486-1.16.92-1.78 1.296-.62.39-1.26.73-1.91 1.02-1.3.6-2.64 1.01-3.97 1.37-1.33.33-2.65.6-3.93.82-.63.11-1.26.23-1.89.34l-1.81.35c-1.17.25-2.28.52-3.27.9-.99.374-1.88.845-2.59 1.443-.73.58-1.28 1.31-1.69 2.056-.41.75-.68 1.51-.864 2.16-.09.33-.16.624-.22.89-.062.263-.11.49-.14.68l-.11.58"/>
    </svg>
    );
  }

});

const Facebook = React.createClass({

  render() {
    return (
      <svg {...this.props} viewBox="0 0 12 12" className="svg-share-icon svg-share-icon-facebook">
        <path className="svg-icon-path" d="M9.1,0.1V2H8C7.6,2,7.3,2.1,7.1,2.3C7,2.4,6.9,2.7,6.9,3v1.4H9L8.8,6.5H6.9V12H4.7V6.5H2.9V4.4h1.8V2.8 c0-0.9,0.3-1.6,0.7-2.1C6,0.2,6.6,0,7.5,0C8.2,0,8.7,0,9.1,0.1z"></path>
      </svg>
    );
  }

});

const Twitter = React.createClass({

  render() {
    return (
      <svg {...this.props} viewBox="0 0 12 12" className="svg-share-icon svg-share-icon-twitter">
        <path className="svg-icon-path" d="M10.8,3.5c0,0.1,0,0.2,0,0.3c0,3.3-2.5,7-7,7c-1.4,0-2.7-0.3-3.8-1c0.2,0,0.4,0,0.6,0c1.1,0,2.2-0.5,3.1-1.2 c-1.1,0-2-0.7-2.3-1.7c0.2,0,0.3,0,0.5,0s0.4,0,0.7-0.1c-1.1-0.2-2-1.2-2-2.4l0,0c0.3,0.2,0.7,0.3,1.1,0.3C1,4.3,0.6,3.5,0.6,2.7 c0-0.5,0.1-0.8,0.3-1.2c1.2,1.6,3,2.5,5,2.6c0-0.2-0.1-0.4-0.1-0.6c0-1.3,1.1-2.4,2.5-2.4c0.7,0,1.4,0.3,1.8,0.8 c0.6-0.1,1.1-0.3,1.6-0.6c-0.2,0.6-0.6,1.1-1.1,1.4c0.5-0.1,1-0.2,1.4-0.4C11.7,2.8,11.2,3.2,10.8,3.5z"></path>
      </svg>
    );
  }

});

const Google = React.createClass({

  render() {
    return (
      <svg {...this.props} viewBox="0 0 12 12" className="svg-share-icon svg-share-icon-google">
        <path className="svg-icon-path" d="M5.4,5.7c0,0.2,0.1,0.3,0.2,0.5c0.2,0.2,0.3,0.3,0.6,0.5s0.4,0.3,0.7,0.5C7,7.5,7.2,7.7,7.4,8 c0.2,0.3,0.2,0.6,0.2,1c0,0.4-0.1,0.8-0.3,1.2c-0.3,0.6-0.9,1-1.5,1.3S4.3,12,3.6,12c-0.6,0-1.2-0.1-1.8-0.3s-1-0.5-1.2-1 c-0.2-0.3-0.3-0.6-0.3-0.9c0-0.4,0.1-0.7,0.3-1.1c0.2-0.3,0.5-0.6,0.9-0.8c0.6-0.4,1.6-0.6,2.9-0.7C4.2,6.9,4.1,6.8,4,6.6 C4,6.4,3.9,6.3,3.9,6.1c0-0.2,0.1-0.4,0.2-0.6c-0.2,0-0.4,0-0.5,0c-0.7,0-1.3-0.2-1.8-0.7C1.3,4.3,1.1,3.7,1.1,3 c0-0.4,0.1-0.8,0.3-1.1S1.7,1.2,2,0.9c0.4-0.3,0.8-0.6,1.3-0.7C3.9,0.1,4.4,0,4.9,0h3l-1,0.6H6c0.4,0.3,0.6,0.6,0.8,1 s0.3,0.7,0.3,1.2c0,0.3-0.1,0.7-0.2,0.9C6.8,4,6.6,4.2,6.5,4.4C6.3,4.5,6.1,4.7,6,4.8C5.8,5,5.7,5.1,5.5,5.3 C5.4,5.4,5.4,5.6,5.4,5.7z M4.3,11.3c0.3,0,0.5,0,0.8-0.1c0.3-0.1,0.5-0.2,0.7-0.3c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.2-0.5,0.2-0.8 c0-0.1,0-0.2-0.1-0.4S6.5,9.1,6.4,9c0-0.1-0.1-0.2-0.2-0.3C6.1,8.6,6.1,8.5,6,8.4c0-0.1-0.1-0.1-0.3-0.2C5.6,8.1,5.5,8,5.5,8 c0,0-0.1-0.1-0.3-0.2C5,7.7,4.9,7.6,4.9,7.6c-0.1,0-0.2,0-0.3,0c-0.3,0-0.5,0-0.8,0.1S3.3,7.7,3,7.8C2.8,7.9,2.5,8,2.3,8.1 C2.1,8.3,2,8.4,1.8,8.7C1.7,8.9,1.6,9.1,1.6,9.4c0,0.3,0.1,0.6,0.3,0.9c0.2,0.3,0.4,0.5,0.7,0.6c0.3,0.1,0.6,0.2,0.9,0.3 S4,11.3,4.3,11.3z M4.3,5c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.3-0.2,0.5-0.3C5.6,4.3,5.7,4,5.7,3.5c0-0.3,0-0.6-0.1-0.9 C5.5,2.2,5.4,1.9,5.3,1.6C5.1,1.3,4.9,1.1,4.7,0.9S4.1,0.6,3.8,0.6c-0.2,0-0.4,0-0.6,0.1C3,0.8,2.9,1,2.7,1.1 C2.5,1.4,2.4,1.8,2.4,2.3c0,0.2,0,0.5,0.1,0.7c0,0.2,0.1,0.5,0.2,0.7C2.8,4,2.9,4.2,3.1,4.4c0.1,0.2,0.3,0.4,0.5,0.5 C3.8,5,4.1,5,4.3,5z M10.2,5h1.5v0.8h-1.5v1.6H9.4V5.8H7.9V5h1.5V3.5h0.8V5z"></path>
      </svg>
    );
  }

});

const Download = React.createClass({

  render() {
    return (
      <svg {...this.props} viewBox="0 0 64 64" height='45' width='45' className="svg-share-icon svg-share-icon-download">
        <path d="M30.461,41.374 C30.786,41.699 31.193,41.884 31.616,41.947 C31.752,41.976 31.893,41.993 32.037,41.993 C32.6,41.993 33.107,41.761 33.472,41.389 C33.49,41.373 33.511,41.364 33.528,41.347 L39.417,35.5 C40.23,34.693 40.23,33.385 39.417,32.578 C38.604,31.771 37.285,31.771 36.473,32.578 L34.046,34.986 L34.046,23.993 C34.046,22.888 33.148,21.992 32.038,21.992 C30.93,21.992 30.03,22.888 30.03,23.993 L30.03,35.083 L27.529,32.584 C26.719,31.774 25.407,31.774 24.597,32.584 C23.787,33.393 23.787,34.705 24.597,35.515 L30.461,41.374 L30.461,41.374 Z" className="svg-share-icon-arrow" fill="#88C057"></path>
        <path d="M42.006,45.994 L22.006,45.994 C20.902,45.994 20.006,46.888 20.006,47.993 C20.006,49.098 20.902,49.993 22.006,49.993 L42.006,49.993 C43.11,49.993 44.006,49.098 44.006,47.993 C44.006,46.888 43.11,45.994 42.006,45.994 L42.006,45.994 Z" className="svg-share-icon-ground" fill="#88C057"></path>

      </svg>
    );
  }

});

module.exports={Hull, Twitter, Facebook, Google, Download}
