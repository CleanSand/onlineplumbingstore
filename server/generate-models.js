const { SequelizeAuto } = require('sequelize-auto');

const auto = new SequelizeAuto('yiabd2', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
  directory: './models', // Путь к папке, в которую будут сохранены сгенерированные модели
  additional: {
    timestamps: false // Дополнительные опции моделей, если необходимо
  },
  tables: ['table1', 'table2'], // Если вы хотите сгенерировать только определенные таблицы, укажите их здесь
});

auto.run(function (err) {
  if (err) {
    throw err;
  }
  console.log('Модели успешно сгенерированы!');
});
