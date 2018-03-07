
Pod::Spec.new do |s|
  s.name         = "RNPhotoGridView"
  s.version      = "1.0.0"
  s.summary      = "RNPhotoGridView"
  s.description  = <<-DESC
                  RNPhotoGridView
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNPhotoGridView.git", :tag => "master" }
  s.source_files  = "RNPhotoGridView/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"

end

