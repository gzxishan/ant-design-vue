<script>
import CUploadByClicking from './upload-by-clicking';
import CUploadByClickingString from '!raw-loader!./upload-by-clicking';
import CDefaultFiles from './default-files';
import CDefaultFilesString from '!raw-loader!./default-files';
import CCompleteControlOverFileList from './complete-control-over-file-list';
import CCompleteControlOverFileListString from '!raw-loader!./complete-control-over-file-list';
import CPicturesWithListStyle from './pictures-with-list-style';
import CPicturesWithListStyleString from '!raw-loader!./pictures-with-list-style';
import CUploadDirectory from './upload-directory';
import CUploadDirectoryString from '!raw-loader!./upload-directory';
import CTransformFileBeforeRequest from './transform-file-before-request';
import CTransformFileBeforeRequestString from '!raw-loader!./transform-file-before-request';
import CAvatar from './avatar';
import CAvatarString from '!raw-loader!./avatar';
import CPicturesWall from './pictures-wall';
import CPicturesWallString from '!raw-loader!./pictures-wall';
import CDragAndDrop from './drag-and-drop';
import CDragAndDropString from '!raw-loader!./drag-and-drop';
import CUploadManually from './upload-manually';
import CUploadManuallyString from '!raw-loader!./upload-manually';
import CCustomizePreviewFile from './customize-preview-file';
import CCustomizePreviewFileString from '!raw-loader!./customize-preview-file';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 上传

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

## 何时使用

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。代码演示`
};

export default {
  category: 'Components',
  subtitle: '上传',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'Upload',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CUploadByClickingString}><CUploadByClicking /></demo-container>
            <demo-container code={CDefaultFilesString}><CDefaultFiles /></demo-container>
            <demo-container code={CCompleteControlOverFileListString}><CCompleteControlOverFileList /></demo-container>
            <demo-container code={CPicturesWithListStyleString}><CPicturesWithListStyle /></demo-container>
            <demo-container code={CUploadDirectoryString}><CUploadDirectory /></demo-container>
            <demo-container code={CTransformFileBeforeRequestString}><CTransformFileBeforeRequest /></demo-container>
          </a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CAvatarString}><CAvatar /></demo-container>
            <demo-container code={CPicturesWallString}><CPicturesWall /></demo-container>
            <demo-container code={CDragAndDropString}><CDragAndDrop /></demo-container>
            <demo-container code={CUploadManuallyString}><CUploadManually /></demo-container>
            <demo-container code={CCustomizePreviewFileString}><CCustomizePreviewFile /></demo-container>
          </a-col>
        </a-row>
        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>
