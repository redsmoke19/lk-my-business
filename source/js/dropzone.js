import { Dropzone } from 'dropzone';

const dzDeleteIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1.1" viewBox="0 0 32 32"><g transform="scale(2)"><circle style="fill:#f44336" cx="8" cy="8" r="7"/><rect style="fill:#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/><rect style="fill:#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/></g></svg>';

const initDropZone = () => {
  const dropZoneElements = document.querySelectorAll('[data-dz]');
  dropZoneElements.forEach((item) => {
    const isDoc = item.hasAttribute('data-dz-text');
    console.log(isDoc);
    const addButton = item.querySelector('[data-dz-add]');
    const dropzone = new Dropzone(item, {
      url: 'http://httpbin.org/anything',
      method: 'post',
      clickable: addButton,
      addRemoveLinks: true,
      dictRemoveFile: dzDeleteIcon,
      dictCancelUpload: '',
      maxFilesize: isDoc ? 30 : 5,
      acceptedFiles: isDoc ? '.pdf, .doc, docx' : '.jpg, .png, jpeg',
      // acceptedFiles: '.jpg, .png, jpeg',
      // createImageThumbnails: false,
      dictFileTooBig: 'Вы пытаетесь загрузить слушком большой файл ({{filesize}}Mb). Максимальный размер: {{maxFilesize}}Mb.',
      init() {
        this.on('addedfile', (file) => {
          addButton.style.display = 'none';
        });
        this.on('removedfile', (file) => {
          addButton.style.display = 'flex';
        });
      },
    });
  });
};

export { initDropZone };
