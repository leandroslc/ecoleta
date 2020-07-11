/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import * as styles from './styles';

interface DropzoneProps {
  onFileUploaded?: (file: File) => void;
}

export const Dropzone = (props: DropzoneProps) => {
  const { onFileUploaded } = props;

  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        const fileUrl = URL.createObjectURL(file);

        setSelectedFileUrl(fileUrl);

        if (onFileUploaded) {
          onFileUploaded(file);
        }
      }
    },
    [onFileUploaded],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <div {...getRootProps()} css={styles.container}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <img
          src={selectedFileUrl}
          alt="Imagem do estabelecimento"
          css={styles.image}
        />
      ) : (
        <p css={styles.empty}>
          <FiUpload css={styles.emptyIcon} aria-hidden="true" />
          Imagem do estabelecimento
        </p>
      )}
    </div>
  );
};
