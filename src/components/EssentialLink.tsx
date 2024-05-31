import { QIcon, QItem, QItemLabel, QItemSection } from 'quasar';
import { defineComponent, PropType } from 'vue';

export interface EssentialLinkProps {
    title: string;
    caption?: string;
    link?: string;
    icon?: string;
}

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => (
        <QItem
            clickable
            tag="a"
            target="_blank"
            href={props.link}>

            {
                props.icon &&
                <QItemSection avatar>
                <QIcon name={props.icon} />
                </QItemSection>
            }

            <QItemSection>
                <QItemLabel>{ props.title }</QItemLabel>
                <QItemLabel caption>{ props.caption }</QItemLabel>
            </QItemSection>
        </QItem>
    )
  }
});