export default () => {
  const ranges = document.querySelectorAll('.range');

  if (ranges.length > 0) {
    ranges.forEach((range) => {
      const rangeInput = range.querySelector('.range__input');
      const rangeProgress = range.querySelector('.range__progress');
      const rangeOutput = range.querySelector('.range__output input');

      const niceThousand = (string) => {
        const newString = Number.isNaN(string) ? '' : string;

        return newString.toString()
          .split('')
          .reverse()
          .map((char, i) => char + (i % 3 ? '' : ' '))
          .reverse()
          .join('')
          .trim();
      };

      if (rangeInput && rangeProgress && rangeOutput) {
        const z1 = parseInt(rangeInput.min, 10);
        const z2 = parseInt(rangeInput.max, 10);
        const x = 100 / (z2 - z1);
        const y = (-z1 * 100) / (z2 - z1);

        const drawProgress = (value, type = 'range') => {
          let valueInner = value;
          if (type === 'range') {
            rangeOutput.value = valueInner;

            rangeOutput.closest('.range__output').classList.remove('error');

            rangeOutput.value = niceThousand(valueInner);
          } else {
            valueInner = parseInt(valueInner.replace(/\s/g, ''), 10);

            if (z2 >= valueInner && z1 <= valueInner) {
              rangeInput.value = valueInner;

              rangeOutput.closest('.range__output').classList.remove('error');

              rangeOutput.value = niceThousand(valueInner);
            } else {
              rangeOutput.closest('.range__output').classList.add('error');

              rangeOutput.value = niceThousand(valueInner);

              return;
            }
          }

          if (valueInner > z1) {
            rangeProgress.style.width = `${(valueInner * x) + y}%`;
          } else {
            rangeProgress.style.width = '0%';
          }
        };

        drawProgress(rangeInput.value, 'range');

        rangeInput.addEventListener('input', () => {
          drawProgress(rangeInput.value, 'range');
        });

        rangeOutput.addEventListener('input', () => {
          drawProgress(rangeOutput.value, 'text');
        });

        document.addEventListener('keypress', (evt) => (/[0-9\s]/.test(String.fromCharCode(evt.key))));
      }
    });
  }
};
