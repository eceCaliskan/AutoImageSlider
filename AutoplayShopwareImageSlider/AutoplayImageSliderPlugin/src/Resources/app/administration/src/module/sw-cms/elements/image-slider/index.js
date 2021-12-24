import template from './config/sw-cms-el-config-image-slider.html.twig'
const { Component } = Shopware;

Component.override('sw-cms-el-config-image-slider', {
    template
});

let imageConfig = Shopware.Service('cmsService').getCmsElementConfigByName('image-slider');

imageConfig.defaultConfig.autoplay = {
    source: 'static',
    value: true
}

imageConfig.defaultConfig.autoplaySpeed = {
    source: 'static',
    value: 100
}
Shopware.Service('cmsService').registerCmsElement(imageConfig);