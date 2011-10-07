desc "Watch .js and compiles to public/javascripts"
task :watch do
  require 'fssm'
  FSSM.monitor('./', '*.js') do
    update do |base, relative|
      #closure --js jquery-optimage.js --js_output_file jquery-optimage.min.js
      sh "closure --js #{relative} --js_output_file ./public/javascripts/#{relative.gsub(".js",".min.js")}"
    end
  end
end