(function($) {

    $.fn.kanban = function(options) {

       // defaults

        var $this = $(this);

        var settings = $.extend({ 
            colours: [],
            items: [],
	    onChange: function(e,ui){},
	    onReceive: function(e,ui){}
        }, options)

        var classes = {
            kanban_board_class: "cd_kanban_board",
            kanban_board_titles_class: "cd_kanban_board_titles",
            kanban_board_title_class: "cd_kanban_board_title",
            kanban_board_blocks_class: "mh-blocks",
            kanban_board_block_class: "body-box", 
            kanban_board_item_placeholder_class: "cd_kanban_board_block_item_placeholder",
            kanban_board_item_title_class: "cd_kanban_board_block_item_title",
            kanban_board_item_footer_class: "cd_kanban_board_block_item_footer"
        };

        function build_kanban(){

            $this.addClass(classes.kanban_board_class);
            $this.append('<div class="'+classes.kanban_board_titles_class+'"></div>');
            $this.append('<div class="'+classes.kanban_board_blocks_class+'"></div>');

            build_titles();
            build_blocks(); 

        }

        function build_titles() {

            settings.titles.forEach(function (item, index, array) {
                //var item = '<div style="background: '+settings.colours[index]+'" class="' + classes.kanban_board_title_class + '">' + '<p>'+item+'</p>' + '</div>';
                //$this.find('.'+classes.kanban_board_titles_class).append(item);
            });

        }

        function build_blocks() {
           

            $( "."+classes.kanban_board_block_class ).sortable({
                connectWith: "."+classes.kanban_board_block_class,
                containment: "."+classes.kanban_board_blocks_class,
                placeholder: classes.kanban_board_item_placeholder_class,
                scroll: true,
                cursor: "move",
		change: settings.onChange,
		receive: settings.onReceive
            }).disableSelection();

        }

 

        build_kanban();

    }

}(jQuery));
