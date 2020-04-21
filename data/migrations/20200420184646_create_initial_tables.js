
exports.up = function(knex) {
  return(knex.schema
    .createTable('projects', projects=> {
        projects.increments('id');
        projects.string('name', 100)
          .unique()
          .notNullable();
        projects.text('summary');
        projects.text('notes');
    })
    .createTable('stories', stories => {
        stories.increments('id');
        stories.string('name', 100)
          .unique()
          .notNullable();
        stories.text('summary');
        stories.text('notes');
        stories.integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    })
    .createTable('characters', char => {
        char.increments('id');
        char.string('name', 100)
          .unique()
          .notNullable();
        char.string('type', 100);
        char.integer('age');
        char.string('gender_identity', 100);
        char.string('role', 100);
        char.text('physical_desc');
        char.text('notes');
        char.string('status', 100);
        char.integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    })
    .createTable('settings', sett => {
        sett.increments('id');
        sett.string('name', 100)
          .unique()
          .notNullable();
        sett.string('time', 100);
        sett.text('desc');
        sett.text('background');
        sett.text('activities');
        sett.integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    })
    .createTable('scenes', scenes => {
        scenes.increments('id');
        scenes.string('name', 100)
          .unique()
          .notNullable();
        scenes.text('summary');
        scenes.text('notes');
        scenes.integer('story_id')
          .notNullable()
          .references('id')
          .inTable('stories')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        scenes.string('timespan', 100);
    })


    
    )
};

exports.down = function(knex) {
  
};
