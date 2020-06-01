
exports.up = function(knex) {
  //Commenting out as the migration latest errors out with the same table names

  // return(knex.schema
  //   .createTable('projects', projects=> {
  //       projects.increments('id');
  //       projects.string('name', 100)
  //         .unique()
  //         .notNullable();
  //       projects.text('summary');
  //       projects.text('notes');
  //   })
  //   .createTable('stories', stories => {
  //       stories.increments('id');
  //       stories.string('name', 100)
  //         .unique()
  //         .notNullable();
  //       stories.text('summary');
  //       stories.text('notes');
  //       stories.integer('project_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('projects')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //   })
  //   .createTable('characters', char => {
  //       char.increments('id');
  //       char.string('name', 100)
  //         .unique()
  //         .notNullable();
  //       char.string('type', 100);
  //       char.integer('age');
  //       char.string('gender_identity', 100);
  //       char.string('role', 100);
  //       char.text('physical_desc');
  //       char.text('notes');
  //       char.string('status', 100);
  //       char.integer('project_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('projects')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //   })
  //   .createTable('settings', sett => {
  //       sett.increments('id');
  //       sett.string('name', 100)
  //         .unique()
  //         .notNullable();
  //       sett.string('time', 100);
  //       sett.text('desc');
  //       sett.text('background');
  //       sett.text('activities');
  //       sett.integer('project_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('projects')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //   })
  //   .createTable('scenes', scenes => {
  //       scenes.increments('id');
  //       scenes.string('name', 100)
  //         .unique()
  //         .notNullable();
  //       scenes.text('summary');
  //       scenes.text('notes');
  //       scenes.integer('story_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('stories')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       scenes.string('timespan', 100);
  //   })
  //   .createTable('story_characters', storChar => {
  //       storChar.increments('id');
  //       storChar.integer('story_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('stories')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       storChar.integer('character_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('characters')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       storChar.unique(['story_id', 'character_id']);
  //       storChar.text('pov_changes');
  //   })
  //   .createTable('story_settings', storSett => {
  //       storSett.increments('id');
  //       storSett.integer('story_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('stories')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       storSett.integer('setting_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('settings')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       storSett.unique(['story_id', 'setting_id']);
  //   })
  //   .createTable('scene_characters', sceneChar => {
  //       sceneChar.increments('id');
  //       sceneChar.integer('scene_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('scenes')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       sceneChar.integer('character_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('characters')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       sceneChar.unique(['scene_id', 'character_id']);
  //       sceneChar.text('pov_changes');
  //   })
  //   .createTable('scene_settings', sceneSett => {
  //       sceneSett.increments('id');
  //       sceneSett.integer('scene_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('scenes')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       sceneSett.integer('setting_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('settings')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       sceneSett.unique(['scene_id', 'setting_id']);
  //   })
  //   .createTable('character_settings', charSett => {
  //       charSett.increments('id');
  //       charSett.integer('character_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('characters')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       charSett.integer('setting_id')
  //         .notNullable()
  //         .references('id')
  //         .inTable('settings')
  //         .onDelete('RESTRICT')
  //         .onUpdate('CASCADE');
  //       charSett.unique(['character_id', 'setting_id']);
  //   })
  // )
};

exports.down = function(knex) {
//Commenting out as the migration latest errors out with the same table names

//   return knex.schema
//     .dropTableIfExists('character_settings')
//     .dropTableIfExists('scene_settings')
//     .dropTableIfExists('scene_characters')
//     .dropTableIfExists('story_settings')
//     .dropTableIfExists('story_characters')
//     .dropTableIfExists('scenes')
//     .dropTableIfExists('settings')
//     .dropTableIfExists('characters')
//     .dropTableIfExists('stories')
//     .dropTableIfExists('projects')
// };
