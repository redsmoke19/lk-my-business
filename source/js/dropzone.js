import { Dropzone } from 'dropzone';

const dzDeleteIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1.1" viewBox="0 0 32 32"><g transform="scale(2)"><circle style="fill:#f44336" cx="8" cy="8" r="7"/><rect style="fill:#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/><rect style="fill:#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/></g></svg>';

const initDropZone = () => {
  const dropZoneElements = document.querySelectorAll('[data-dz]');
  var myStopReload = false;
  dropZoneElements.forEach((item) => {
    const isDoc = item.hasAttribute('data-dz-text');
    const addButton = item.querySelector('[data-dz-add]');
    const dropzone = new Dropzone(item, {
      url: item.getAttribute('data-upload-link'),
      method: 'post',
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      clickable: addButton,
      addRemoveLinks: true,
      dictRemoveFile: dzDeleteIcon,
      dictCancelUpload: '',
      maxFilesize: isDoc ? 25 : 5,
      //acceptedFiles: isDoc ? '.pdf, .doc, docx' : '.jpg, .png, jpeg',
      dictFileTooBig: 'Вы пытаетесь загрузить слушком большой файл ({{filesize}}Mb). Максимальный размер: {{maxFilesize}}Mb.',
      init: function init() {
        this.on('addedfile', function (file) {
          addButton.style.display = 'none';
        });
        this.on('removedfile', function (file) {
          addButton.style.display = 'flex';
        });
        this.on("queuecomplete", function (file) {
            if (!myStopReload) {
                location.reload();
            } else {
                myStopReload = false;
            }

        });

          this.on('error', function(file, error) {
              addButton.style.display = 'flex';
              if (typeof dzCustomDisplayError === "function") {
                  dzCustomDisplayError(file, error);
                  $('.dz-error').hide();
                  myStopReload = true;
              }

              //console.log(error.message);
              //window.alert(errorMessage);
          });

      }
    });
  });
};

export { initDropZone };
